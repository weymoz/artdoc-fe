block('page-club').wrap()(function() {
  return [
    {
      block: 'page',
      elem: 'content',
      content: {
        block: 'breadcrumbs',
        mix: { block: 'page', elem: 'breadcrumbs' }
      }
    },
    this.ctx
  ]
})

block('page-club').content()(function( node ) {
    return [
      {
        elem: 'content',
        content: [
          {
            elem: 'title',
            elemMods: { size: 'xxl', gap: 'top' },
            mix: { block: 'heading', mods: { 'has-dot': true, size: 'xxl' } },
            content: node.i18n('club', 'title')
          },
          {
            block: 'paragraph',
            content: node.i18n('club', 'description')
          },
          {
            block: 'page',
            elem: 'title',
            elemMods: { size: 'xl' },
            mix: [
              { block: 'heading', mods: { caps: true, size: 'l' } },
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
            ],
            content: node.i18n('club', 'benefits')
          },
          {
            elem: 'rate-list',
            content: [
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                  content:[
                    {
                      elem: 'image',
                      mix: [
                        { block: 'rate-card', elem: 'count'   },
                        { block: 'rate-card', elem: 'count_1' }
                      ]
                    },
                    node.i18n('club', 'one')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                  {
                    elem: 'image',
                    mix: [
                      { block: 'rate-card', elem: 'count'  },
                      { block: 'rate-card', elem: 'count_2'}
                    ]
                  },
                  node.i18n('club', 'two')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                  {
                    elem: 'image',
                    mix: [
                      { block: 'rate-card', elem: 'count'   },
                      { block: 'rate-card', elem: 'count_3' }
                    ]
                  },
                  node.i18n('club', 'three')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content: [
                  {
                    elem: 'image',
                    mix: [
                      { block: 'rate-card', elem: 'count'   },
                      { block: 'rate-card', elem: 'count_4' }
                    ]
                  },
                  node.i18n('club', 'four')
                ]
              }
            ]
          }
        ]
      },
      // {
      //   elem: 'footer',
      //   content: [
      //     {
      //       elem: 'footer-content',
      //       content: [
      //         {
      //           block: 'page',
      //           elem: 'title',
      //           elemMods: { size: 'xl' },
      //           mix: [
      //             { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
      //             { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
      //           ],
      //           content: node.i18n('club', 'join')
      //         },
      //         {
      //           block: 'paragraph',
      //           content: node.i18n('club', 'join-descr')
      //         },
      //         {
      //           block: 'paragraph',
      //           mods: { align: 'center' },
      //           content: {
      //             block: 'button',
      //             mix: { block: 'page-club', elem: 'get-card' },
      //             mods: {
      //               type: 'link',
      //               size: 'xxl',
      //               theme: 'artdoc-dark'
      //             },
      //             text: node.i18n('club', 'apply'),
      //             url: 'mailto:media@artdocfest.com'
      //           }
      //         }
      //       ]
      //     },
      //     {
      //       elem: 'footer-content',
      //       content: [
      //         {
      //           block: 'page',
      //           elem: 'title',
      //           elemMods: { size: 'xl' },
      //           mix: [
      //             { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
      //             { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
      //           ],
      //           content: node.i18n('club', 'card')
      //         },
      //         {
      //           elem: 'image',
      //           mix: { block: 'page-club', elem: 'card-image' }
      //         },
      //         {
      //           block: 'paragraph',
      //           content: [
      //             node.i18n('club', 'condition1'),
      //             {
      //               block: 'link',
      //               mods: { view: 'text' },
      //               mix: { block: 'page-club', elem: 'link' },
      //               url: 'mailto:media@artdocfest.com',
      //               content: node.i18n('club', 'link')
      //             },
      //             node.i18n('club', 'condition2')
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        attrs: { id: 'performers' },
      },
      {
        elem: 'content',
        content: [
          {
            block: 'page',
            elem: 'title',
            elemMods: { size: 'xl' },
            mix: [
              { block: 'heading', mods: { caps: true, size: 'l' } },
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
            ],
            content: node.i18n('club', 'members')
          },
          {
           elem: 'party',
           lang: node.data.lang
          },
          {
            elem: 'hidden',
            elemMods: {
              hide: true
            },
            content: [
              {
                elem: 'party',
                elemMods: {
                  hide: true
                },
                lang: node.data.lang
              }
            ]
          },
          // {
          //   block: 'button',
          //   mix: { block: 'page-club', elem: 'make-party' },
          //   text: 'Показать ещё'
          // },
          {
            attrs: { id: 'festivals' },
          },
          {
            block: 'page',
            elem: 'title',
            elemMods: { size: 'xl' },
            mix: [
              { block: 'heading', mods: { caps: true, size: 'l' } },
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
            ],
            content: node.i18n('club', 'fests')
          },
          {
            elem: 'partners'
          }
        ]
      },
      {
        elem: 'footer',
        content: [
          {
            elem: 'footer-content',
            content: [
              {
                block: 'page',
                elem: 'title',
                elemMods: { size: 'xl' },
                mix: [
                  { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
                  { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
                ],
                content: node.i18n('club', '200')
              },
              {
                block: 'paragraph',
                mods: { align: 'center' },
                content: node.i18n('club', 'call')
              },
              {
                block: 'paragraph',
                mods: { align: 'center' },
                content: {
                  block: 'button',
                  mix: { block: 'page-club', elem: 'get-card' },
                  mods: {
                    type: 'link',
                    size: 'xxl',
                    theme: 'artdoc-dark'
                  },
                  text: node.i18n('club', 'apply'),
                  url: 'mailto:media@artdocfest.com'
                }
              }
            ]
          }
        ]
      }
    ]
  });
