modules.define('card-ticket', ['i-bem-dom', 'BEMHTML'], function(provide, bemDom, BEMHTML) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        var _ticket = this.params.ticket;

        bemDom.replace(
          this.domElem,
          BEMHTML.apply({
            block: 'card-ticket',
            mods: {
              size: 'm',
              theme: 'artdoc'
            },
            mix: { block: 'list-tickets', elem: 'item' },
            ticket: _ticket,
            content: [
              {
                elem: 'header',
                content: [
                  { elem: 'room' },
                  {
                    elem: 'city',
                    content: _ticket.city.name
                  },
                ]
              },
              {
                elem: 'content',
                content: [
                  {
                    elem: 'user-date',
                    content: _ticket.time_gmt3
                  },
                  {
                    elem: 'user-time',
                    content: _ticket.time_gmt3
                  }
                ]
              },
              {
                elem: 'footer',
                content: [
                  {
                    elem: 'buy',
                    content: _ticket.price && _ticket.price.price ? _ticket.price.price : 0
                  }
                ]
              },
              {
                elem: 'footer',
                content: [
                  {
                    elem: 'left',
                    content: _ticket.tickets_left
                  }
                ]
              }
            ]
          })
          );
      }
    }
  }
}));

});
