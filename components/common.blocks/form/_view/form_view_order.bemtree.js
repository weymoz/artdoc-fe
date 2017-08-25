block('form').mod('view', 'order')(
  def()(function() {
    return applyNext({
      'ctx.method': 'POST',
      'ctx.action': 'http://artdoc.breadhead.ru/cinema/booking/booking/',
      'ctx.enctype': 'multipart/form-data',
      'ctx.directions': ['right-top'],
    });
  }),

  addMods()({
    'has-validation': true,
    message: 'popup',
  }),

  addJs()(function() {
    return {
      session_id: this.ctx.session,
      _csrf: this.ctx.csrf
    }
  }),

  content()( ( node, ctx ) => {
    return [
      {
        block : 'fieldset',
        attrs: {
          disabled: !ctx.session
        },
        content : [
          {
            block: 'paragraph',
            mix: { block: node.block, elem: 'section' },
            content: 'Мы отправим на вашу электронную почту ссылку на страницу сеанса после оплаты. Фильм будет доступен к просмотру 26 декабря с 18:00 до 21:00 (время UTC+3 Санкт-Петербург).'
          },
          {
            tag: 'input',
            attrs: {
              type: 'hidden',
              name: '_csrf',
              val: ctx.csrf
            },
          },
          {
            tag: 'input',
            attrs: {
              type: 'hidden',
              name: 'session_id',
              val: ctx.session
            },
          },
          {
            block: 'form-field',
            mix: { block: node.block, elem: 'section' },
            mods: {
              type: 'input',
              required: true,
              validate: 'email',
              message: 'popup',
            },
            directions: ['right-top'],
            js: {
              required: {
                message: 'Shit!'
              }
            },
            name: 'email',
            content: [
              {
                elem: 'label',
                content: {
                  block: 'label',
                  content: 'Эл. почта'
                }
              },
              {
                elem: 'control',
                content: {
                  block: 'input',
                  mods: {
                    width: 'available',
                    size: 'l',
                    theme: 'islands'
                  }
                }
              }
            ]
          },
          {
            block: 'form-field',
            mix: { block: node.block, elem: 'section' },
            mods: {
              type: 'checkbox',
              required: true,
              message: 'popup',
            },
            directions: ['right-top'],
            name: 'term',
            content: [
              {
                block: 'checkbox',
                mods: {
                  size: 'l',
                  theme: 'islands'
                },
                text: [
                  'Я принимаю ',
                  {
                    block: 'link',
                    url: '#',
                    content: 'условия покупки и использования билета'
                  }
                ],
                val: 'confirm'
              }
            ]
          },
          {
            block: 'button',
            mix: { block: node.block, elem: 'section' },
            mods: {
              type: 'submit',
              width: 'available',
              size: 'l'
            },
            text: 'Купить онлайн-билет'
          }
        ]
      },
      {
        block: 'modal',
        mods: {
          autoclosable: true,
          'has-close': true
        }        
      }
    ]
  })
);
