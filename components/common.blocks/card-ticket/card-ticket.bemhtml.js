block('card-ticket')(
  
  tag()('article'),

  addMods()({ status: 'disabled' }),

  match( ( node, ctx ) => ctx.ticket.tickets_left && ( ( ctx.ticket.time_gmt3 * 1000 ) > Date.now() ) )(

    tag()('a'),

    addAttrs()( ( node, ctx ) => {
      return { 'href': '?code=' + ctx.ticket.code } }
    ),

    addMods()( { status: 'active' } )

  ),

  match(function(){ return this.ctx.ticket.tickets_left < 5; }).addMods()({ status: 'less' })

)
