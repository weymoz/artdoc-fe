block('club-footer')(
  addMix()({ block: 'page', elem: 'content' }),
  content()(function() {
      return [
        {
          elem: 'aside',
          content: [
            {
              elem: 'footer-title',
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              content: [
                  { elem: 'avatar' },
                  {
                    elem: 'title',
                    elemMods: { size: 'xl' },
                    mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
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
            { elem: 'title', mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } }, content: ['партнерские фестивали'] },
            { elem: 'partners' }
            ]
          },
          {
            elem: 'footer-item',
            content: [
            { elem: 'title', mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } }, content: ['аккредитованные критики'] },
            { elem: 'party' }
            ]
          },
          {
            elem: 'footer-item',
            content: [
              { elem: 'title', mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } }, content: ['вход для участников'] },
              { elem: 'club-login', content: 'Открытие клуба 15 сентября' }
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
