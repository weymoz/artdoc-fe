var fs = require('fs'),
    path = require('path'),
    nodeEval = require('node-eval'),
    config = require('./config'),

    isDev = process.env.NODE_ENV === 'development',
    useCache = !isDev,
    cacheTTL = config.cacheTTL,
    cache = {};

function render(req, res, data, context) {
  var query = req.query,
      user = req.user,
      cacheKey = req.originalUrl + (context ? JSON.stringify(context) : '') + (user ? JSON.stringify(user) : ''),
      cached = cache[cacheKey],
      templates = getTemplates( data.page, data.bundle );

  if (useCache && cached && (new Date() - cached.timestamp < cacheTTL)) {
    return res.send(cached.html);
  }

  if (isDev && query.json) return res.send('<pre>' + JSON.stringify(data, null, 4) + '</pre>');

  var bemtreeCtx = {
    block: 'root',
    context: context,
    // extend with data needed for all routes
    data: Object.assign({}, {
      view: data.view || 'page-' + data.page,
      params: req.params,
      url: req._parsedUrl,
      // csrf: req.csrfToken()
    }, data)
  };

  try {
    var bemjson = templates.BEMTREE.apply(bemtreeCtx);
  } catch(err) {
    console.error('BEMTREE error', err.stack);
    console.trace('server stack');
    return res.sendStatus(500);
  }

  if (isDev && query.bemjson) return res.send('<pre>' + JSON.stringify(bemjson, null, 4) + '</pre>');

  try {
    templates.BEMHTML.BEMContext.prototype.mergeDeep = mergeDeep;
    var html = templates.BEMHTML.apply(bemjson);
  } catch(err) {
    console.error('BEMHTML error', err.stack);
    return res.sendStatus(500);
  }

  useCache && (cache[cacheKey] = {
    timestamp: new Date(),
    html: html
  });

  res.send(html);
}

function dropCache() {
  cache = {};
}

function evalFile(filename) {
  return nodeEval(fs.readFileSync(filename, 'utf8'), filename);
}

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep ( target, source ) {
  let output = Object.assign( {}, target );

  if ( isObject( target ) && isObject( source ) ) {
    Object.keys( source ).forEach( key => {
      if ( isObject( source[ key ] ) ) {
        if (!( key in target ) ) {
          Object.assign( output, { [ key ]: source[ key ] } );
        } else {
          output[ key ] = mergeDeep( target[ key ], source[ key ] );
        }
      } else {
        Object.assign( output, { [ key ]: source[ key ] } );
      }
    });
  }

  return output;
}

function getTemplates(bundleName = 'index', level = 'desktop') {
  var pathToBundle = path.resolve('bundles', level + '.bundles', bundleName);
  return {
    BEMTREE: evalFile(path.resolve(pathToBundle, bundleName + '.bemtree.js')).BEMTREE,
    BEMHTML: evalFile(path.resolve(pathToBundle, bundleName + '.bemhtml.js')).BEMHTML
  };
}

module.exports = {
  render: render,
  dropCache: dropCache
};
