block('list-tickets').content()(function() {
  const _tickets = this.ctx.tickets,
        _code = this.ctx.code;

  return _tickets.map( ticket => {
    return {
      block: 'card-ticket',
      mix: { block: 'list-tickets', elem: 'item' },
      code: _code,
      ticket: ticket,
      js: { ticket: ticket }
    }
  } );
});
