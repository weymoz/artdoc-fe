const fs        = require('fs'),
      path      = require('path'),
      mkdirp    = require('mkdirp'),
      build     = require('./config/build'),
      techs     = require('./config/techs'),
      getLevels = require('./config/levels').getLevels,
      SETS      = require('./config/levels').SETS,
      isProd    = process.env.YENV === 'production';

module.exports = function(config) {
  const platforms = Object.keys(SETS);

  platforms.forEach(function(platform) {
    [ 'css', 'js' ].forEach( catalog => {
      pathToStatic = path.resolve( 'static', 'assets', catalog, platform );
      fs.existsSync( pathToStatic ) || mkdirp( pathToStatic );
    } );

    const levels = getLevels( platform );
    isProd || levels.push({ path: path.join('components', 'development.blocks'), check: true });

    config.nodes( 'bundles/' + platform + '.bundles/*', function( nodeConfig ) {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: levels }],
        [techs.fileProvider, { target: '?.bemdecl.js' }]
      ]);

      build( nodeConfig );

      nodeConfig.addTargets([
        '?.bemtree.js',
        '?.bemhtml.js'
      ]);
    });

    config.node( path.join( 'dist', platform ), function( nodeConfig ) {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: levels }],
        [techs.bem.levelsToBemdecl]
      ]);

      build( nodeConfig, platform );

      nodeConfig.addTechs([
        [techs.fileCopy, { source: '?.min.js', target: '../../static/assets/js/' + platform + '/?.min.js' }],
        [techs.fileCopy, { source: '?.min.css', target: '../../static/assets/css/' + platform + '/?.min.css' }]
      ]);

      nodeConfig.addTargets([
        '../../static/assets/css/' + platform + '/?.min.css',
        '../../static/assets/js/' + platform + '/?.min.js'
      ]);
    } );
  });
};