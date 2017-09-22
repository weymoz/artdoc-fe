block('form').mod('view', 'auth')(
  content()( () => {
    return [
      {
        elem: 'content',
        content: [
          {
            block: 'form-field',
            mods: {
              type: 'input'
            },
            name: 'username',
            content: {
              elem: 'control',
              content: {
                block: 'input',
                placeholder: 'Эл. почта'
              }
            }
          },
          {
            block: 'form-field',
            mods: {
              type: 'input'
            },
            name: 'password',
            content: {
              elem: 'control',
              content: {
                block: 'input',
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
            view : 'action'
          },
          text: 'Войти'
        }
      }
    ]
  })
)
