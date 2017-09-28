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
              message: 'popup',
              size: 'm',
              theme: 'artdoc-dark'
            },
            directions: [ 'top-left' ],
            js: {
              required: { message: 'Это поле обязательно!' }
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
              message: 'popup',
              size: 'm',
              theme: 'artdoc-dark'
            },
            directions: [ 'top-left' ],
            js: {
              required: { message: 'Это поле обязательно!' }
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
            disabled: true,
            width: 'available',
            type: 'submit',
            view: 'action',
            size: 'xl',
            theme: 'artdoc-dark'
          },
          mix: { block: 'form', elem: 'submit' },
          text: 'Войти'
        }
      }
    ]
  })
)
