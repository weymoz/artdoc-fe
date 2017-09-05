block('footer').content()(function() {
  return [
    {
      elem: 'content',
      content: [
        {
          elem: 'about',
          content: [
            {
              block: 'logo',
              mods: { title: true }
            },
            {
              block: 'paragraph',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content: 'Самый большой архив документального кино на русском языке'
            }
          ]
        },
        {
          elem: 'for-viewers',
          content: [
            {
              block: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              mods: {
                size: 'm'
              },
              content: 'Зрителям'
            },
            {
              block: 'list',
              mods: {
                type: 'unstyled'
              },
              content: [
                { elem: 'item',
                  content: [
                  {
                    block: 'link',
                    url: '/about',
                    content: 'О проекте'
                  }]
                },
                { elem: 'item',
                  content: [
                  {
                    block: 'link',
                    url: '/selection',
                    content: 'Подборки'
                  }]
                },
                { elem: 'item',
                  content: [
                  {
                    block: 'link',
                    url: '/cinema',
                    content: 'Онлайн-киносеансы'
                  }]
                },
                { elem: 'item',
                  content: [
                  {
                    block: 'link',
                    url: '/movie',
                    content: 'Все фильмы'
                  }]
                },
                // { elem: 'item',
                //   content: [
                //   {
                //     block: 'link',
                //     url: '',
                //     content: 'Помощь'
                //   }]
                // }
              ]
            }
          ]
        },
        {
          elem: 'for-professionals',
          content: [
            {
              block: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              mods: {
                size: 'm'
              },
              content: 'Профессионалам кино'
            },
            {
              block: 'list',
              mods: {
                type: 'unstyled'
              },
              content: [
                { elem: 'item',
                  content: [
                  {
                    block: 'link',
                    url: '/club',
                    content: 'Клуб artdoc.media'
                  }]
                },
                { elem: 'item',
                  content: [
                  {
                    block: 'link',
                    url: '/club#partners',
                    content: 'Аккредитованные фестивали'
                  }]
                },
                // { elem: 'item',
                //   content: [
                //   {
                //     block: 'link',
                //     url: '/cinema',
                //     content: 'Аккредитованная пресса'
                //   }]
                // },
                // { elem: 'item',
                //   content: [
                //   {
                //     block: 'link',
                //     url: '/movie',
                //     content: 'Ретроспективы'
                //   }]
                // },
                // { elem: 'item',
                //   content: [
                //   {
                //     block: 'link',
                //     url: '',
                //     content: 'Предложить фильм'
                //   }]
                // }
              ]
            }
          ]
        },
        {
          elem: 'contacts',
          content: [
            {
              block: 'list',
              mods: {
                type: 'unstyled'
              },
              content: [
                { elem: 'item', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } }, content: 'media@artdocfest.com' },
                { elem: 'item', mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } }, content: 'LV 1011 Latvia Riga Stabu 19-2' }
              ]
            }
          ]
        }
      ]
    }
  ];
});
