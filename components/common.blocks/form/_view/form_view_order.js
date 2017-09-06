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

    var apiSettings = {
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

    $.ajax(apiSettings).done(function (response) {

      const data = JSON.parse( response );

      if ( data.clientToken ) {
        loader('//js.braintreegateway.com/web/dropin/1.4.0/js/dropin.min.js',
          function() {
            const paymentForm = BEMHTML.apply({
              block: 'form',
              mods: {
                view: 'payment',
                theme: 'artdoc'
              }
            });

            _this._modal
              .setContent( '' )       // Move modal to end of page,
              .setMod( 'visible' )    // because we have form inside form
              .setContent( paymentForm );

            braintree.dropin.create({
              authorization: data.clientToken,
              container: '#payment-form',
              locale: data.locale
            }, function ( createErr, instance ) {

              if (createErr) {
                console.error( createErr );
                return;
              }

              let paymentFormElem = _this._modal.findChildBlock( { block: Form, modName: 'view', modVal: 'payment' } );

              bemDom.append(
                paymentFormElem.domElem,
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
                instance.requestPaymentMethod( function (err, payload) {
                  if (err){
                    console.error(err);
                  } else {
                    bemDom.destruct( button.domElem );

                    apiSettings.url = '/api/payment/' + data.transaction_id;
                    apiSettings.data = {
                      payment_nonce: payload.nonce
                    };

                    $.ajax( apiSettings ).done( function ( apiResponse ) {
                      apiResponse = JSON.parse( apiResponse );
                      if ( apiResponse.error ) {
                        bemDom.append(
                          paymentFormElem.domElem,
                          '<p class="paragraph text text_state_error">Произошла ошибка: ' + apiResponse.error + '</p>'
                        );
                      } else {
                        console.log( apiResponse );
                        window.location.href = '/order/' + data.transaction_id + '?payment_nonce=' + payload.nonce;
                      }
                    } );

                  }
                });
              });
            });
          }
        );
      } else if ( data.message === 'email send' ) {
        _this._modal
          .setContent( '' )       // Move modal to end of page,
          .setMod( 'visible' )    // because we have form inside form
          .setContent([
            '<div style="padding: 20px">',
              '<p class="paragraph paragraph_lead text text_align_center">На вашу почту отправлено письмо<br>со ссылкой для активации</p>',
              '<p class="paragraph paragraph_lead text text_align_center">Билет забронирован на 10 минут. Пожалуйста, подтвердите бронирование в течение этого времени, перейдя по ссылке из письма.',
              '<p class="paragraph paragraph_lead text text_align_center">На один адрес электронной почты можно активировать только один билет.</p>',
            '<div>'
          ].join(''));
      } else {
        console.log( data );
        _this._modal
          .setContent( '' )       // Move modal to end of page,
          .setMod( 'visible' )    // because we have form inside form
          .setContent([
            '<div style="padding: 20px">',
              '<p class="paragraph paragraph_lead text text_align_center">Произошла ошибка: ' + data.message || data.error + '</p>',
            '<div>'
          ].join(''));
      }

    });
  },

  _onFormError: function(e, data) {
    console.log('error', data);
  }

}));

});
