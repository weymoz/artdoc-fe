modules.define('form', [ 'jquery', 'i-bem-dom' ], function( provide, $, bemDom, Form ) {

provide(Form.declMod({ modName: 'view', modVal: 'auth' }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );
        this._events().on('success', this._onFormSuccess);
        this._events().on('error', this._onFormError);
      }
    }
  },

  _onFormSuccess: function() {
    const apiSettings = {
      'async': true,
      'url': this.domElem[0].action,
      'method': 'post',
      'headers': { 'content-type': 'application/x-www-form-urlencoded' },
      'data': this.getVal()
    }

    $.ajax(apiSettings).done( response => {
      const msg =  response ;
      if ( msg.error ) {
        this.setMessageVal('Ошибка авторизации');
        this.getMessage().show();
      } else {
        window.location.href = window.location.href;
      }
    });
  },

  _onFormError: function(e, data) {
    console.log('error', data);
  }
}));

});
