block('card-ticket')(

  match( ( node, ctx ) => ctx.ticket ).def()( ( node, ctx ) => {
    Object.keys( ctx.ticket ).map( key => {
      node[ '_' + key ] = ctx.ticket[ key ];
      return true;
    } );

    node._time_gmt3 = node._tz
      ? node._time_gmt3 + ( new Date().getTimezoneOffset() * 60 ) + node._tz * 60
      : node._time_gmt3;

    return applyNext();
  } ),

  addMods()( node => {
    return {
      promo: node._promo
    }
  } ),
  
  tag()('article')

)
