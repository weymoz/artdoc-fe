block('list-tickets')(
  tag()('ul'),
  content()( ( node, ctx ) => {
    let _lang = ctx.lang;
    return ctx.tickets.map( ticket => {
      return {
        block: 'card-ticket',
        mods: {
          view: 'movie'
        },
        mix: { block: 'list-tickets', elem: 'item' },
        ticket: ticket,
        lang: _lang,
        js: { ticket: ticket, timezoneOffset: 0 }
      }
    } );
  })
)
