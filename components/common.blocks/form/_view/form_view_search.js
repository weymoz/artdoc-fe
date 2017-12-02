modules.define('form',
  [ 'i-bem-dom', 'functions__debounce', 'jquery', 'BEMHTML' ],
  function(provide, bemDom, debounce, $, BEMHTML, Form) {

provide(Form.declMod({ modName: 'view', modVal: 'search' }, {
  onSetMod: {
    js: {
      inited: function() {

        var ajax_timeout = false, ajax_request, previeous_query = '';

        this._events().on( 'change', () => {
          var _this = this;

          if ( _this.getVal().q && _this.getVal().q.length > 3 ) {

            if (ajax_timeout) {
              clearTimeout(ajax_timeout);
            }

            if (_this.getVal().q.trim() == previeous_query) {
              return true;
            }

            previeous_query = _this.getVal().q.trim();

            ajax_timeout = setTimeout(function () {

              if (ajax_request) {
                ajax_request.abort();
              }

              ajax_request = $.ajax({
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
                  BEMHTML.apply({
                    block: 'search',
                    mods: { view: 'form' },
                    result: response.items || false,
                    query:  _this.getVal().q
                  })

                );

              });
              if (ajax_timeout) {
                clearTimeout(ajax_timeout);
              }
            },100)



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

