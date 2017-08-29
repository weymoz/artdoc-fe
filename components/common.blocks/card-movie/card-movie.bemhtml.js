block( 'card-movie' )(

  match( ( node, ctx ) => !ctx.movie ).def()( '' ),

  match( ( node, ctx ) => ctx.movie ).def()( ( node, ctx ) => {
    Object.keys( ctx.movie ).map( key => {
      node[ '_' + key ] = ctx.movie[ key ];
      return true;
    } );

    // 16:9 ratio for all covers
    node._cover.height = Math.floor( node._cover.width / ( 16 / 9 ) );
    // node._cover.height = node._cover.width / ( 16 / 9 );

    return applyNext();
  } ),

  tag()( 'article' )
)