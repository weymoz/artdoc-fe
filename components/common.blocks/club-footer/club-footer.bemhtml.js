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
                    elem: 'title',
                    elemMods: { size: 'xl' },
                    mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
                    content: 'Клуб '
                  },
                  {
                    elem: 'title',
                    elemMods: { size: 'xl' },
                    content: 'Артдок'
                  }
              ]
            },
            {
              block: 'paragraph',
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
                  { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
                ],
                content: 'Партнёрские фестивали'
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
                  { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
                ],
                content: 'Аккредитованные критики'
              },
              { elem: 'party' }
            ]
          },
          {
            elem: 'footer-item',
            content: node.user
            ? 'Вы авторизованы'
            : [
                {
                  elem: 'title',
                  mix: [
                    { block: 'heading', mods: { caps: true, size: 'xs' } },
                    { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
                  ],
                  content: 'Вход для участников'
                },
                { block: 'form', mods: { view: 'auth' }, mix: { block: 'club-footer', elem: 'club-login' } }
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
