block('list-tickets').content()(function() {
  const _tickets = this.ctx.tickets,
        _code = this.ctx.code;

  return _tickets.map( ticket => {
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
});
