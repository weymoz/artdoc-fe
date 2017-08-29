block('card-ticket')(

  match( ( node, ctx ) => ctx.ticket ).def()( ( node, ctx ) => {
    Object.keys( ctx.ticket ).map( key => {
      node[ '_' + key ] = ctx.ticket[ key ];
      return true;
    } );

    return applyNext();
  } ),
  
  tag()('article'),

  addMods()({ status: 'disabled' }),

  match( ( node, ctx ) => ctx.ticket.tickets_left && ( ( ctx.ticket.time_gmt3 * 1000 ) > Date.now() ) )(

    tag()('a'),

    addAttrs()( ( node, ctx ) => {
      return { 'href': '?code=' + ctx.ticket.code } }
    ),

    addMods()( { status: 'active' } )

  ),

  match( ( node, ctx ) => ctx.ticket.tickets_left < 5 ).addMods()({ status: 'less' })

)
