block('card-ticket')(

  match( ( node, ctx ) => ctx.ticket ).def()( ( node, ctx ) => {
    Object.keys( ctx.ticket ).map( key => {
      node[ '_' + key ] = ctx.ticket[ key ];
      return true;
    } );

    if (ctx.lang){
      node._lang = ctx.lang;
    }

    if (ctx.currency){
      node._currency = ctx.currency;
    }


    node._time_gmt3 = node._tz
      ? node._time_gmt3 + ( new Date().getTimezoneOffset() * 60 ) + node._tz * 60
      : node._time_gmt3;

    return applyNext();
  } ),


  addJs()( node => {
    return {
      lang: node._lang,
      currency: node._currency
    }
  } ),

  tag()('article')

)
