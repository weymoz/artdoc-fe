modules.define('form',
  [ 'i-bem-dom', 'functions__debounce', 'jquery', 'BEMHTML' ],
  function(provide, bemDom, debounce, $, BEMHTML, Form) {

provide(Form.declMod({ modName: 'view', modVal: 'search' }, {
  onSetMod: {
    js: {
      inited: function() {
        this._events().on( 'change', () => {
          let _this = this;
          if ( _this.getVal().q && _this.getVal().q.length > 3 ) {
            debounce( $.ajax({
              'async': true,
              'url': '/api/search/',
              'method': 'GET',
              'headers': {
                'content-type': 'application/x-www-form-urlencoded',
              },
              'data': {
                'q': _this.getVal().q
              }
            }).done( response => {
              bemDom.update(
                _this._elem('content').domElem,
                JSON.parse(response)
                  ? BEMHTML.apply({
                      block: 'search',
                      mods: { view: 'form' },
                      result: JSON.parse(response).api.items || false,
                      query:  _this.getVal().q
                    })
                  : ''
              );
            } ), 1000 )
          } else {
            bemDom.update(
              _this._elem('content').domElem,
              ''
            );
          }
        }, this )
      }
    }
  }
}));

});

