/*global braintree*/

modules.define('form',
  ['jquery', 'modal', 'i-bem-dom', 'loader_type_js', 'BEMHTML', 'button'],
  function(provide, $, Modal, bemDom, loader, BEMHTML, Button, Form) {

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

      const data = JSON.parse( response );

      loader('//js.braintreegateway.com/web/dropin/1.4.0/js/dropin.min.js',
        function() {
          const paymentForm = BEMHTML.apply({
            block: 'form',

            mods: {
              view: 'payment',
              theme: 'artdoc'
            },
          });

          _this._modal.setContent( '' ).setMod('visible').setContent( paymentForm );

          braintree.dropin.create({
            authorization: data.clientToken,
            container: '#payment-form',
            locale: data.locale
          }, function (createErr, instance) {

            if (createErr) {
              console.error(createErr);
              return;
            }

            _this._paymentForm = _this._modal.findChildBlock({ block: Form, modName: 'view', modVal: 'payment' });

            bemDom.append(
              _this._paymentForm.domElem,
              BEMHTML.apply({
                block: 'button',
                mods: {
                  type: 'submit',
                  width: 'available',
                  size: 'xxl',
                  theme: 'artdoc'
                },
                text: 'Отправить'
              })
            );

            const button = _this._modal.findChildBlock(Button);

            _this._domEvents(button).on('click', function () {
              instance.requestPaymentMethod(function (err, payload) {
                if (err){
                  console.error(err);
                } else {
                  bemDom.destruct( button.domElem );
                  window.location.href = '/order/' + data.transaction_id + '/' + payload.nonce;
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
