block( 'card-selection' )(

  match( ( node, ctx ) => !ctx.selection ).def()( '' ),

  match( ( node, ctx ) => ctx.selection ).def()( ( node, ctx ) => {
    Object.keys( ctx.selection ).map( key => {
      node[ '_' + key ] = ctx.selection[ key ];
      return true;
    } );
    return applyNext();
  } ),

  tag()( 'article' )
)