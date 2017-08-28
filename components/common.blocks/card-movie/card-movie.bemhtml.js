block( 'card-movie' )(

  match( ( node, ctx ) => !ctx.movie ).def()( '' ),

  match( ( node, ctx ) => ctx.movie ).def()( ( node, ctx ) => {

    const _movie = ctx.movie;

    // 16:9 ratio for all covers
    _movie.cover.height = _movie.cover.width / ( 16 / 9 );

    Object.keys( _movie ).map( key => {
      node[ '_' + key ] = ctx.movie[ key ];
      return true;
    } );

    return applyNext();
  } ),

  tag()( 'article' )
)