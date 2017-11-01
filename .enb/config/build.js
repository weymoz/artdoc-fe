const path = require('path'),
      techs = require( path.resolve( __dirname, '..', 'config', 'techs' ) ),
      isProd    = process.env.YENV === 'production';

module.exports = function( node, platform ) {
  node.addTechs([
    // essential
    [techs.bem.deps],
    [techs.bem.files],

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
      target: '?.tmpl.bemdecl.js',
      sourceTech: 'js',
      destTech: 'bemhtml'
    }],
    [techs.bem.deps, {
      target: '?.tmpl.deps.js',
      bemdeclFile: '?.tmpl.bemdecl.js'
    }],
    [techs.bem.files, {
      depsFile: '?.tmpl.deps.js',
      filesTarget: '?.tmpl.files',
      dirsTarget: '?.tmpl.dirs'
    }],
    [techs.bemhtml, {
      target: '?.browser.bemhtml.js',
      filesTarget: '?.tmpl.files',
      sourceSuffixes: ['bemhtml', 'bemhtml.js'],
      engineOptions: { elemJsInstances: true }
    }],

    // js
    [techs.browserJs, { includeYM: true }],
    [techs.fileMerge, {
      target: '?.js',
      sources: ['?.browser.js', '?.browser.bemhtml.js']
    }],

    [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
    [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }],
    [techs.borschik, { source: '?.bemhtml.js', target: '?.bemhtml.min.js', minify: isProd }]
  ]);
}