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
    message: 'popup'
  }),

  addJs()(function() {
    return {
      session_id: this.ctx.session_id,
      movie_id: this.ctx.movie_id,
      _csrf: this.ctx.csrf
    }
  }),

  content()( ( node, ctx ) => {

    let messageInt = ctx.lang === 'en' ? 'Email address is necessary' : 'Адрес эл. почты обязателен';
    let checkboxMsg = ctx.lang === 'en' ? 'You have to accept the terms' : 'Вы должны принять условия';
    let notEmail =  ctx.lang === 'en' ? 'It doesn\'t looks like email' : 'Это не похоже на адрес эл. почты';
    let placeholderInt = ctx.lang === 'en' ? 'Email' : 'Эл. почта';
    let iAgree = ctx.lang === 'en' ? 'I accept ' : 'Я принимаю ';
    let terms = ctx.lang === 'en' ? 'the terms and conditions of а ticket purchase' : 'условия покупки и использования билета';
    let onlineTicket = ctx.lang === 'en' ? ' online-ticket' : ' онлайн-билет';
    let accessToMovie = ctx.lang === 'en' ? ' access to movie' : ' доступ к просмотру';


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
              message: 'text',
            },
            directions: ['bottom-left'],
            js: {
              required: { message: messageInt },
              email: { message: notEmail }
            },
            name: 'email',
            content: [
              {
                elem: 'control',
                content: {
                  block: 'input',
                  mods: {
                    width: 'available',
                    size: 'xl'
                  },
                  placeholder: placeholderInt
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
              message: 'text',
            },
            js: {
              required: { message: checkboxMsg }
            },
            directions: ['bottom-left'],
            name: 'term',
            content: [
              {
                block: 'checkbox',
                mods: { size: 's' },
                text: [
                  iAgree,
                  {
                    block: 'link',
                    url: '/terms',
                    attrs: { target: '_blank'},
                    mods: { size: 's' },
                    content: terms
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
          text: ctx.submitLabel + (ctx.isCinema ? onlineTicket : accessToMovie )
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
