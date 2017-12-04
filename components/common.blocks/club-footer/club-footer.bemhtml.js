block('club-footer')(
  addMix()({ block: 'page', elem: 'content' }),
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
                    content: 'Клуб'
                  },
                  { html: '&nbsp;' },
                  {
                    elem: 'name',
                    elemMods: { size: 'xl', secondary: true },
                    mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
                    content: 'Артдок'
                  }
              ]
            },
            {
              block: 'paragraph',
              mix: { block: node.block, elem: 'about' },
              content: 'Закрытое сообщество представителей крупных мировых фестивалей документального кино, ведущиx российскиx кинокритиков, редакторов телеканалов и профессионалов кино'
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
                  content: 'Партнёрские фестивали'
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
                  content: 'Аккредитованные критики'
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
                  content: "Здравствуйте, " + (node.user && node.user.extra && node.user.extra.user_meta ? node.user.extra.user_meta.name:'') + "."
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
                    text: 'Выйти'

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
                  content: 'Вход для участников'
                },
                { block: 'form', mods: { view: 'auth', theme: 'artdoc-dark' }, mix: { block: 'club-footer', elem: 'club-login' } },
              ]
          }
          ]
        }
      ]
  }),
  wrap()( ( node, ctx ) => {
    return {
      block: 'page',
      elem: 'section',
      content: ctx
    }
  } )
)
