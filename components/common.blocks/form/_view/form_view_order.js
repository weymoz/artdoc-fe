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
      'url': _this.params.session_id > 0 ? '/api/order/' + _this.params.session_id : '/api/buy/' + _this.params.movie_id,
      'method': 'POST',
      'headers': {
        'content-type': 'application/x-www-form-urlencoded',
      },
      'data': {
        'email'   : _this.getVal().email,
        'lang'    : _this.params.lang,
        'currency': _this.params.currency
      }
    }
    $.ajax(apiSettings).done(function (response) {
      const data = response;
      if ( data.clientToken ) {
        loader('https://js.braintreegateway.com/web/dropin/1.4.0/js/dropin.min.js',
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
              let sendButton = _this.params.lang === 'en' ? 'Pay' : 'Оплатить'
              bemDom.append(
                paymentFormElem.domElem,
                BEMHTML.apply({
                  block: 'form',
                  elem: 'footer',
                  content: {
                    block: 'button',
                    mods: {
                      type: 'submit',
                      width: 'available',
                      size: 'xxl',
                      theme: 'artdoc'
                    },
                    mix: { block: 'form', elem: 'submit' },
                    text: sendButton
                  }
                })
              );

              const button = _this._modal.findChildBlock(Button);

              _this._domEvents(button).on('click', function () {
                instance.requestPaymentMethod( function (err, payload) {
                  if (err){
                    console.log('///////////');
                    console.error(err);
                    console.log('///////////');
                  } else {
                    bemDom.destruct( button.domElem );
                    apiSettings.url = '/api/payment/' + data.transaction_id;
                    apiSettings.data = {
                      payment_nonce: payload.nonce
                    };

                    let errorInt = _this.params.lang === 'en' ? 'Error: ' : 'Произошла ошибка: ';
                    let lang = _this.params.lang;


                    $.ajax( apiSettings ).done( function ( apiResponse ) {
                      if ( apiResponse.error ) {
                        bemDom.append(
                          paymentFormElem.domElem,
                          '<p class="paragraph text text_state_error">'+ errorInt + apiResponse.error + '</p>'
                        );
                      } else {
                        window.location.href = '/' + lang + '/order/' + data.transaction_id + '?payment_nonce=' + payload.nonce;
                      }
                    } );

                  }
                });
              });
            });
          }
        );
      } else if ( data.message === 'email send' ) {

        let info1    = _this.params.lang === 'en' ? 'We have sent an email to you with an activation link' : 'На вашу почту отправлено письмо<br>со ссылкой для активации';
        let info2    = _this.params.lang === 'en' ? 'The ticket is booked for 10 minutes. Please confirm the reservation within this time by clicking on the link from the email.' : 'Билет забронирован на 10 минут. Пожалуйста, подтвердите бронирование в течение этого времени, перейдя по ссылке из письма.';
        let info3    = _this.params.lang === 'en' ? 'Only one ticket can be activated for one e-mail address.' : 'На один адрес электронной почты можно активировать только один билет.';

        _this._modal
          .setContent( '' )    // Move modal to end of page,
          .setMod( 'visible' ) // because we have form inside form
          .setContent([
            '<div style="padding: 20px">',
              '<p class="paragraph paragraph_lead text text_align_center">' + info1 + '</p>',
              '<p class="paragraph paragraph_lead text text_align_center">' + info2 + '</p>',
              '<p class="paragraph paragraph_lead text text_align_center">' + info3 + '</p>',
            '<div>'
          ].join(''));
      } else {

        let errorNew = _this.params.lang === 'en' ? 'Error: ' : 'Произошла ошибка: ';
        console.log( data );
        _this._modal
          .setContent( '' )    // Move modal to end of page,
          .setMod( 'visible' ) // because we have form inside form
          .setContent([
            '<div style="padding: 20px">',
              '<p class="paragraph paragraph_lead text text_align_center">'+ errorNew + ( data.message || data.error ) + '</p>',
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
