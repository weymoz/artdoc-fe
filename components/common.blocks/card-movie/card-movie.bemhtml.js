block( 'card-movie' )(

  match( ( node, ctx ) => !ctx.movie ).def()( '' ),

  match( ( node, ctx ) => ctx.movie ).def()( ( node, ctx ) => {

    let _this = {};

    Object.keys( ctx.movie ).map( key => {
      _this[ '_' + key ] = ctx.movie[ key ];
    } );

    return applyNext( _this );
  } ),

  tag()( 'article' )
)
