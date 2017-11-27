block('list-tickets')(
  tag()('ul'),
  content()( ( node, ctx ) => {
    return ctx.tickets.map( ticket => {
      return {
        block: 'card-ticket',
        mods: {
          view: 'movie'
        },
        mix: { block: 'list-tickets', elem: 'item' },
        ticket: ticket,
        js: { ticket: ticket, timezoneOffset: 0 }
      }
    } );
  })
)