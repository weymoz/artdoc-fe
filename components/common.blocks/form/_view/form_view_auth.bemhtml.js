block('form').mod('view', 'auth')(
  addMods()({
    'has-validation': true,
    message: 'popup'
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
              message: 'popup'
            },
            js: {
              required: {
                message: 'Это поле обязательно!'
              }
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
              type: 'password',
              required: true,
              message: 'popup'
            },
            js: {
              required: {
                message: 'Это поле обязательно!'
              }
            },
            name: 'password',
            content: {
              elem: 'control',
              content: {
                block: 'input',
                mods: {
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
            size: 'xl'
          },
          text: 'Войти'
        }
      },
      {
        elem: 'message',
        mix: { block: 'message', mods: { type: 'text' } },
        content: 'Неверный логин или пароль'
      }
    ]
  })
)
