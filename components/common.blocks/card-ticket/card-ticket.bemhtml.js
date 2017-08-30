block('card-ticket')(

  match( ( node, ctx ) => ctx.ticket ).def()( ( node, ctx ) => {
    Object.keys( ctx.ticket ).map( key => {
      node[ '_' + key ] = ctx.ticket[ key ];
      return true;
    } );

    return applyNext();
  } ),
  
  tag()('article')

)
