block('club-footer').content()(function() {
    return [
      {
        elem: 'aside',
        content: [
        {
          elem: 'footer-title',
          content: [
              {
                elem: 'avatar',
                content: ''
              },
              {
                  elem: 'title',
                  elemMods: {
                  size: 'xl'
                  },
                  mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
                  content: 'Клуб '
              },
              {
                elem: 'title',
                elemMods: {
                  size: 'xl'
                },
                mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
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
          { elem: 'title', mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } }, content: ['участники фестиваля'] },
          { elem: 'party' }
          ]
        },
        {
          elem: 'footer-item',
          content: [{ elem: 'club-login' }]
        }
        ]
      }
    ]
});

