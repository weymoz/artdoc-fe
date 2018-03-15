block('list-tickets')(
  tag()('ul'),
  content()( ( node, ctx ) => {
    let _lang = ctx.lang;
    let _currency = ctx.currency;
    return ctx.tickets.map( ticket => {
      return {
        block: 'card-ticket',
        mods: {
          view: 'movie'
        },
        mix: { block: 'list-tickets', elem: 'item' },
        ticket: ticket,
        lang: _lang,
        currency: _currency,
        js: { ticket: ticket, timezoneOffset: 0 }
      }
    } );
  })
)
