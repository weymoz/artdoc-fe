block('form').mod('view', 'auth')(
  def()( () => {
    return applyNext( { ctx: {
      directions: [ 'right-top' ],
      method: 'POST',
      action: '/api/user/login'
    } } )
  } ),
  addMods()({
    'has-validation': true,
    message: 'text',
    size: 'm',
    theme: 'artdoc-dark'
  }),
  content()( () => {
    return [
      {
        elem: 'content',
        content: [
          {
            block: 'form-field',
            mods: {
              type: 'input',
              required: true,
              validate: 'email',
              message: 'text',
              size: 'm',
              theme: 'artdoc-dark'
            },
            directions: [ 'bottom-left' ],
            js: {
              required: { message: 'Адрес эл. почты обязателен' },
              email: { message: 'Это не похоже на адрес эл. почты' }
            },
            name: 'username',
            content: {
              elem: 'control',
              content: {
                block: 'input',
                mods: {
                  width: 'available',
                  size: 'xl'
                },
                placeholder: 'Эл. почта'
              }
            }
          },
          {
            block: 'form-field',
            mods: {
              type: 'input',
              required: true,
              message: 'text',
              size: 'm',
              theme: 'artdoc-dark'
            },
            directions: [ 'bottom-left' ],
            js: {
              required: { message: 'Это поле обязательно' }
            },
            name: 'password',
            content: {
              elem: 'control',
              content: {
                block: 'input',
                mods: {
                  type: 'password',
                  width: 'available',
                  size: 'xl'
                },
                placeholder: 'Пароль'
              }
            }
          }
        ]
      },
      {
        elem: 'footer',
        content: {
          block: 'button',
          mods: {
            width: 'available',
            type: 'submit',
            view: 'action',
            size: 'xl',
            theme: 'artdoc-dark'
          },
          mix: { block: 'form', elem: 'submit' },
          text: 'Войти'
        }
      },
      {
        elem: 'footer',
        content: [
          {
            block: 'paragraph',
            content: {
              block: 'link',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              mods: { size: 'xs' },
              url: '/club',
              content: 'Как стать участником клуба'
            }
          }
        ]
      }
    ]
  })
)
