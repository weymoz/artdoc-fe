const path = require('path'),
      techs = require( path.resolve( __dirname, '..', 'config', 'techs' ) ),
      isProd    = process.env.YENV === 'production';

module.exports = function( node, platform ) {
  node.addTechs([
    // essential
    [techs.bem.deps, { target: '.?.deps.js' } ],
    [techs.bem.files, { depsFile: '.?.deps.js' } ],

    // css
    [techs.postcss, {
      target: '?.css',
      oneOfSourceSuffixes: ['post.css', 'css'],
      plugins: techs.postcssPlugins
    }],

    // bemtree
    [techs.bemtree, {
      sourceSuffixes: ['bemtree', 'bemtree.js'],
    }],

    // templates
    [techs.bemhtml, {
      sourceSuffixes: ['bemhtml', 'bemhtml.js'],
      forceBaseTemplates: true,
      engineOptions: {
        elemJsInstances: true,
        // runtimeLint: true
      },
      requires: {
        moment: {
          globals: 'moment',
          ym: 'moment',
          commonJS: 'moment'
        },
        moment_ru: {
          commonJS: 'moment/locale/ru'
        }
      }
    }],

    // client templates
    [techs.bem.depsByTechToBemdecl, {
      target: '.?.tmpl.bemdecl.js',
      sourceTech: 'js',
      destTech: 'bemhtml'
    }],
    [techs.bem.deps, {
      target: '.?.tmpl.deps.js',
      bemdeclFile: '.?.tmpl.bemdecl.js'
    }],
    [techs.bem.files, {
      depsFile: '.?.tmpl.deps.js',
      filesTarget: '?.tmpl.files',
      dirsTarget: '?.tmpl.dirs'
    }],
    [techs.bemhtml, {
      target: '.?.browser.bemhtml.js',
      filesTarget: '?.tmpl.files',
      sourceSuffixes: ['bemhtml', 'bemhtml.js'],
      engineOptions: { elemJsInstances: true }
    }],

    // js
    [techs.browserJs, {
      includeYM: true,
      target: '.?.browser.js',
    }],
    [techs.fileMerge, {
      target: '.?.es6.js',
      sources: ['.?.browser.js', '.?.browser.bemhtml.js']
    }],

    isProd
      ? [techs.babel, { target: '?.js', sourceTarget: '.?.es6.js', babelOptions: { presets: [ 'es2015' ] } }]
      : [techs.fileCopy, { target: '?.js', source: '.?.es6.js' }],

    [techs.borschik, { minify: isProd, freeze: false, source: '?.js', target: '?.min.js' }],
    [techs.borschik, { minify: isProd, freeze: true,  source: '?.css', target: '?.min.css' }],
    [techs.borschik, { minify: isProd, freeze: false, source: '?.bemhtml.js', target: '?.bemhtml.min.js' }]
  ]);
}