block('footer').content()( ( node, ctx ) => {
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
              content: {
                html: 'Самый большой архив документального кино&nbsp;на русском языке'
              }
            }
          ]
        },
        {
          elem: 'for-viewers',
          content: [
            {
              block: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-neue-condensed', loaded: true } },
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
              mix: { block: 'font', mods: { family: 'helvetica-neue-condensed', loaded: true } },
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
              elem: 'social',
              content: Object.keys( ctx.social ).map( name => {
                return {
                  block: 'button',
                  mods: {
                    type: 'link',
                    view: 'plain',
                    size: 'l'
                  },
                  mix: { block: node.block, elem: 'social-item' },
                  attrs: { target: '_blank' },
                  icon: {
                    block: 'icon',
                    mods: {
                      social: name,
                      size: 'l'
                    }
                  },
                  url: ctx.social[ name ]
                }
              } )
            },
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
