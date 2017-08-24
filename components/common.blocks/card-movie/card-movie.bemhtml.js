block( 'card-movie' )(

  match( ( node, ctx ) => !ctx.movie ).def()( '' ),

  match( ( node, ctx ) => ctx.movie ).def()( ( node, ctx ) => {
    Object.keys( ctx.movie ).map( key => {
      node[ '_' + key ] = ctx.movie[ key ];
      return true;
    } );
    return applyNext();
  } ),

  tag()( 'article' )
)