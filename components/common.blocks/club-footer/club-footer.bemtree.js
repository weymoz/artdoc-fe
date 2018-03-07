block('club-footer')(
  content()( node => {
      return [
        {
          elem: 'aside',
          content: [
            {
              elem: 'footer-title',
              mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
              content: [
                  { elem: 'avatar' },
                  {
                    elem: 'name',
                    elemMods: { size: 'xl' },
                    mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
                    content: node.i18n('club-footer', 'club')
                  },
                  { html: '&nbsp;' },
                  {
                    elem: 'name',
                    elemMods: { size: 'xl', secondary: true },
                    mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
                    content: node.i18n('club-footer', 'artdoc')
                  }
              ]
            },
            {
              block: 'paragraph',
              mix: { block: node.block, elem: 'about' },
              content: node.i18n('club-footer', 'description')
            }
          ]
        },
        {
          elem: 'content',
          content: [
          {
            elem: 'footer-item',
            content: [
              {
                elem: 'title',
                mix: [
                  { block: 'heading', mods: { caps: true, size: 'xs' } },
                  { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
                ],
                content: {
                  block: 'link',
                  mods: { view: 'text' },
                  url: '/club#festivals',
                  content: node.i18n('club-footer', 'fests')
                }
              },
              { elem: 'partners' }
            ]
          },
          {
            elem: 'footer-item',
            content: [
              {
                elem: 'title',
                mix: [
                  { block: 'heading', mods: { caps: true, size: 'xs' } },
                  { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
                ],
                content: {
                  block: 'link',
                  mods: { view: 'text' },
                  url: '/club#performers',
                  content: node.i18n('club-footer', 'member')
                }
              },
              { elem: 'party' }
            ]
          },
          {
            elem: 'footer-item',
            content: node.user
            ? [
                {
                  elem: 'title',
                  mix: [
                    { block: 'heading', mods: { caps: true, size: 'xs' } },
                    { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
                  ],
                  content: node.i18n('club-footer', 'hello') + (node.user && node.user.extra && node.user.extra.user_meta ? node.user.extra.user_meta.name:'') + "."
                },
                {
                    block: 'button',
                    mods: {
                      width: 'available',
                      type: 'link',
                      view: 'action',
                      size: 'xl',
                      theme: 'artdoc-dark'
                    },
                    mix: { block: 'form', elem: 'submit' },
                    url: '/logout',
                    text: node.i18n('club-footer', 'logout')

                },
                {
                  block: "paragraph",
                },
                //userExtra
              ]
            : [
                {
                  elem: 'title',
                  mix: [
                    { block: 'heading', mods: { caps: true, size: 'xs' } },
                    { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
                  ],
                  content: node.i18n('club-footer', 'login')
                },
                {
                  block: 'form',
                  mods: { view: 'auth', theme: 'artdoc-dark' },
                  mix: { block: 'club-footer', elem: 'club-login' },
                  directions: [ 'right-top' ],
                  method: 'POST',
                  action: '/api/user/login'
                },
              ]
          }
          ]
        }
      ]
  })
)
