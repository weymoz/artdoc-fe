block('club-footer').content()(function() {
    return [
      {
        elem: 'footer-aside',
        content: [
        {
          elem: 'icon'
        },
        {
          elem: 'footer-title',
          content: [
              {
                  elem: 'title',
                  mix: { block: 'club-footer', elem: 'title-white' },
                  elemMods: {
                  size: 'xl'
                  },
                  mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
                  content: 'Клуб'
              },
              {
                elem: 'title',
                mix: { block: 'club-footer', elem: 'title-red' },
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
        elem: 'footer-content',
        content: [
        {
          elem: 'footer-item',
          content: [{ elem: 'partners' }]
        },
        {
          elem: 'footer-item',
          content: [{ elem: 'party' }]
        },
        {
          elem: 'footer-item',
          content: [{ elem: 'club-login' }]
        }
        ]
      }
    ]
});

