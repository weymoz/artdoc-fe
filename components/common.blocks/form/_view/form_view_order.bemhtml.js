// block('page').appendContent()()

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
      session_id: this.ctx.session_id,
      movie_id: this.ctx.movie_id,
      _csrf: this.ctx.csrf
    }
  }),

  content()( ( node, ctx ) => {
    console.log(ctx.session);

    return [
      {
        block : 'fieldset',
        attrs: { disabled: (!ctx.session_id && !ctx.movie_id) },
        mix: { block: node.block, elem: 'content' },
        content : [
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
            tag: 'input',
            attrs: {
              type: 'hidden',
              name: 'movie_id',
              val: ctx.movie_id
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
              required: { message: 'Это поле обязательно!' }
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
                    size: 'xl'
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
            js: {
              required: { message: 'Это поле обязательно!' }
            },
            directions: ['right-top'],
            name: 'term',
            content: [
              {
                block: 'checkbox',
                mods: { size: 'l' },
                text: [
                  'Я принимаю ',
                  {
                    block: 'link',
                    url: '/terms',
                    attrs: { target: '_blank'},
                    content: 'условия покупки и использования билета'
                  }
                ],
                val: 'confirm'
              }
            ]
          },
        ]
      },
      {
        elem: 'footer',
        content: {
          block: 'button',
          mix: { block: node.block, elem: 'submit' },
          mods: {
            type: 'submit',
            width: 'available',
            size: 'xl',
            theme: 'artdoc-dark'
          },
          text: ctx.submitLabel + (ctx.isCinema ? ' онлайн-билет' : ' доступ к просмотру' )
        }
      },
      {
        block: 'modal',
        mods: {
          autoclosable: true,
          'has-close': true,
          size: 's'
        }
      }
    ]
  })
);
