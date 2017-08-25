/*global braintree*/

modules.define('form',
  ['jquery', 'modal', 'loader_type_js', 'BEMHTML', 'button'],
  function(provide, $, Modal, loader, BEMHTML, Button, Form) {

provide(Form.declMod({ modName: 'view', modVal: 'order' }, {

  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );
        this._events().on('success', this._onFormSuccess);
        this._events().on('error', this._onFormError);

        this._modal = this.findChildBlock(Modal);
      }
    }
  },

  _onFormSuccess: function() {
    var _this = this;

    var settings = {
      'async': true,
      'url': '/api/order/' + _this.params.session_id,
      'method': 'GET',
      'headers': {
        'content-type': 'application/x-www-form-urlencoded',
      },
      'data': {
        'email': _this.getVal().email
      }
    }

    $.ajax(settings).done(function (response) {

      var data = JSON.parse( response );
      // var braintree;

      loader('//js.braintreegateway.com/web/dropin/1.4.0/js/dropin.min.js',
        function() {
          var content = BEMHTML.apply({
            block: 'form',
            mods: {
              view: 'payment'
            },
            content: [
              {
                attrs: {
                  id: 'payment-form'
                }
              },
              {
                block: 'button',
                mods: {
                  type: 'submit',
                  size: 'm',
                  theme: 'artdoc'
                },
                text: 'Отправить'
              }
            ]
          });

          _this._modal.setContent( content ).setMod('visible');

          var button = _this._modal.findChildBlock(Button);

          braintree.dropin.create({
            authorization: data.clientToken,
            container: '#payment-form',
            locale: data.locale
          }, function (createErr, instance) {
            
            if (createErr) {
              console.error(createErr);
              return;
            }

            _this._domEvents(button).on('click', function () {
              instance.requestPaymentMethod(function (err, payload) {
                if (err){
                  console.error(err);
                } else {
                  window.location.href = '/order/' + data.transaction_id + '?payment_nonce=' + payload.nonce;
                }
              });
            });
          });
        }
      );
      
    });
  },

  _onFormError: function(e, data) {
    console.log('error', data);
  }

}));

});
