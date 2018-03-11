block( 'card-selection' )(

  match( ( node, ctx ) => !ctx.selection ).def()( '' ),

  match( ( node, ctx ) => ctx.selection ).def()( ( node, ctx ) => {
    Object.keys( ctx.selection ).map( key => {
      node[ '_' + key ] = ctx.selection[ key ];
      return true;
    } );

    if (ctx.lang) {
      node['_lang'] = ctx.lang;
    }

    return applyNext( {
      _url: node._code ? '/' + ctx.lang + '/selection/' + node._code : null,
      'mods.theme': ctx.selection.image ? 'artdoc-dark' : 'artdoc'
    } );
  } ),

  tag()( 'article' )
)
