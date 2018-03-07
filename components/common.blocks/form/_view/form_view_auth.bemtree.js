block('form').mod('view', 'auth')(

  content()( node => {
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
              required: { message: node.i18n('form', 'mail-required') },
              email: { message: node.i18n('form', 'mail-error') }
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
                placeholder: node.i18n('form', 'mail')
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
              required: { message: node.i18n('form', 'auth-necessary') }
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
                placeholder: node.i18n('form', 'password')
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
          text: node.i18n('form', 'auth-login')
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
              content: node.i18n('form', 'auth-description')
            }
          }
        ]
      }
    ]
  })

)
