block('footer')(
  match( node => node.data && node.data.meta && node.data.meta.social ).def()( node => {
    return applyNext( { 'ctx.social': node.data.meta.social } );
  }),

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
                mods: { title: true },
                prefix: '/' + ctx.lang
              },
              {
                block: 'paragraph',
                mods: { size: 's' },
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content: node.i18n('footer', 'description')
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
                content: node.i18n('footer', 'viewers')
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
                      url: '/' + ctx.lang + '/movie',
                      content: node.i18n('footer', 'movies')
                    }
                  },
                  {
                    elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/' + ctx.lang + '/selection',
                      content: node.i18n('footer', 'selections')
                    }
                  },
                  {
                    elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/' + ctx.lang + '/cinema',
                      content: node.i18n('footer', 'showtimes')
                    }
                  },
                  {
                    elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/' + ctx.lang + '/about',
                      content: node.i18n('footer', 'about')
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
                  //     content: node.i18n('footer', 'help')
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
                content: node.i18n('footer', 'professionals')
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
                      url: '/' + ctx.lang + '/club',
                      content: node.i18n('footer', 'club')
                    }
                  },
                  { elem: 'item',
                    content: {
                      block: 'link',
                      mods: { view: 'text' },
                      mix: { block: node.block, elem: 'nav-item' },
                      url: '/' + ctx.lang + '/club#festivals',
                      content: node.i18n('footer', 'fests')
                    }
                  },
                  // { elem: 'item',
                  //   content: [
                  //   {
                  //     block: 'link',
                  //     mods: { view: 'text' },
                  //     mix: { block: node.block, elem: 'nav-item' },
                  //     url: '/cinema',
                  //     content: node.i18n('footer', 'press')
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
                      { elem: 'item', content: { html: '© 2017 Artdoc Fest & Media' }},
                      {
                        elem: 'item',
                        content: {
                            block: 'link',
                            mods: { view: 'text' },
                            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                            content: node.i18n('footer', 'user'),
                            url: '/' + ctx.lang + '/terms'
                          }
                      },
                      {
                        elem: 'item',
                        content: {
                          block: 'link',
                          mods: { view: 'text' },
                          mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                          content: node.i18n('footer', 'terms'),
                          url: '/' + ctx.lang + '/terms/#privacy'
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
