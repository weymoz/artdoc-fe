block('footer').js()(true)

block('footer')(
  match( ( node, ctx ) => ctx.social ).elem( 'social' ).content()( ( node, ctx ) => {
    return Object.keys( ctx.social ).map( name => {
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
            size: 'l',
            bright: true
          }
        },
        url: ctx.social[ name ]
      }
    } );
  } ),
  content()( ( node, ctx ) => {
    return [
      {
        elem: 'content',
        elemMods: { section: 'main' },
        mix: { block: 'page', elem: 'content' },
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
                mods: { size: 's' },
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
                block: 'heading',
                mods: { caps: true, size: 'xs', theme: 'artdoc-dark' },
                mix: [{ block: node.block, elem: 'title' }, { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }],
                content: 'Зрителям'
              },
              {
                block: 'list',
                mods: { type: 'unstyled' },
                content: [
                  {
                    elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/movie',
                      content: 'Фильмы'
                    }
                  },
                  {
                    elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/selection',
                      content: 'Подборки'
                    }
                  },
                  {
                    elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/cinema',
                      content: 'Онлайн-киносеансы'
                    }
                  },
                  {
                    elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/about',
                      content: 'О проекте'
                    }
                  },
                  // {
                  //   elem: 'item',
                  //   content: [
                  //   {
                  //     block: 'link',
                  //     mods: { view: 'text' },
                  //     mix: { block: node.block, elem: 'nav-item' },
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
                block: 'heading',
                mods: { caps: true, size: 'xs', theme: 'artdoc-dark' },
                mix: [{ block: node.block, elem: 'title' }, { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }],
                content: 'Профессионалам кино'
              },
              {
                block: 'list',
                mods: {
                  type: 'unstyled'
                },
                content: [
                  { elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/club',
                      content: 'Клуб Артдок'
                    }
                  },
                  { elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/club#festivals',
                      content: 'Аккредитованные фестивали'
                    }
                  },
                  // { elem: 'item',
                  //   content: [
                  //   {
                  //     block: 'link',
                  //     mods: { view: 'text' },
                  //     mix: { block: node.block, elem: 'nav-item' },
                  //     url: '/cinema',
                  //     content: 'Аккредитованная пресса'
                  //   }]
                  // },
                  // { elem: 'item',
                  //   content: [
                  //   {
                  //     block: 'link',
                  //     mods: { view: 'text' },
                  //     mix: { block: node.block, elem: 'nav-item' },
                  //     url: '/movie',
                  //     content: 'Ретроспективы'
                  //   }]
                  // },
                  // { elem: 'item',
                  //   content: [
                  //   {
                  //     block: 'link',
                  //     mods: { view: 'text' },
                  //     mix: { block: node.block, elem: 'nav-item' },
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
              { elem: 'social', social: ctx.social },
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
      },
      {
        elem: 'content',
        elemMods: { section: 'logo' },
        mix: { block: 'page', elem: 'content' },
        content: [
          {
            block: 'logo',
            mix: { block: 'footer', elem: 'logo' },
            url: '//artdocfest.com'
          }
        ]
      },
      {
        elem: 'content',
        elemMods: { section: 'misc' },
        mix: { block: 'page', elem: 'content' },
        content: [
          {
            block: 'layout',
            content: [
              {
                elem: 'content',
                content: [
                  {
                    block: 'list',
                    mods: {
                      type: 'inline',
                      delimiter: 'vertical',
                      size: 's'
                    },
                    mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                    content: [
                      { elem: 'item', content: '© 2017 Artdoc Fest & Media' },
                      {
                        elem: 'item',
                        content: {
                            block: 'link',
                            mods: { view: 'text' },
                            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                            content: 'Пользовательское соглашение',
                            url: '/terms'
                          }
                      },
                      {
                        elem: 'item',
                        content: {
                          block: 'link',
                          mods: { view: 'text' },
                          mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                          content: 'Политика конфиденциальности',
                          url: '/terms/#privacy'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'aside',
                content: {
                  block: 'paragraph',
                  mods: {
                    align: 'right',
                    size: 's'
                  },
                  content: [
                    {
                      content: {
                        html: '<span style="opacity: 0.7">Developed with</span><span style="position: absolute; margin-left: 6px;">💖</span><br>'
                      }
                    },
                    {
                      block: 'link',
                      mods: {
                        align: 'right',
                        size: 's',
                        theme: 'artdoc',
                      },
                      url: 'mailto:best.webapp.dev@gmail.com',
                      target: '_blank',
                      attrs: { style: 'text-decoration: none; border-bottom: 1px solid' },
                      content: 'Get in touch'
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ];
  })
)
