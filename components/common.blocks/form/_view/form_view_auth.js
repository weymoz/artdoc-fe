modules.define('form', ['jquery'], function(provide, $, Form) {

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
    var _this = this;

    var apiSettings = {
      'async': true,
      'url': '/api/user/login',
      'method': 'POST',
      'headers': {
        'content-type': 'application/x-www-form-urlencoded',
      },
      'data': _this.getVal()
    }

    $.ajax(apiSettings).done(function (response) {
      let msg = JSON.parse( response );
      if (!msg) {
        _this.setMessageVal('Ошибка авторизации')
      }
    });
  },

  _onFormError: function(e, data) {
    console.log('error', data);
  }
}));

});
