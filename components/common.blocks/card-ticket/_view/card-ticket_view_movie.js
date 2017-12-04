modules.define('card-ticket', ['i-bem-dom', 'BEMHTML'], function(provide, bemDom, BEMHTML, CardTicket) {

provide(CardTicket.declMod({ modName: 'view', modVal: 'movie' }, {
  onSetMod: {
    js: {
      inited: function() {
        var _ticket = this.params.ticket;

        bemDom.replace(
          this.domElem,
          BEMHTML.apply({
            block: 'card-ticket',
            mods: {
              view: 'movie',
              size: 'm',
              theme: 'artdoc'
            },
            mix: { block: 'list-tickets', elem: 'item' },
            ticket: _ticket
          })
        );
      }
    }
  }
}));

});
