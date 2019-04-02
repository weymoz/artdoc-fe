block('page-support').content()( function( node ) {
    return[
      {
        elem: 'content',
        content: [
          {
            elem: 'header',
            content: [
            {
              block: 'breadcrumbs'
            }
            ]
          },
          {
            elem: 'text-block',
            content: [
            {
              block: 'title',
              mix: [
              {
                block: 'page-support', elem: 'main-title'
              },
              {
               block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true }
              }],
              mods: {
                size: 'xl'
              },
              content: node.i18n('support', 'title')
            },
            {
              block: 'paragraph',
              content: node.i18n('support', 'description1')
            },
            {
              block: 'paragraph',
              content: node.i18n('support', 'description2')
            },
          ]},
          {
            elem: 'text-block',
            content: [
            {
              block: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
              mods: {
                size: 'l'
              },
              content: node.i18n('support', 'showtime')
            },
            {
              block: 'paragraph',
              content: [
              node.i18n('support', 'description3'),
              { block: 'link',
                url: '/' + node.data.lang + '/cinema',
                mix: { block: 'page-support', elem: 'link' },
                content: node.i18n('support', 'link')
              },
              node.i18n('support', 'description4')
              ]
            },
            {
              block: 'paragraph',
              content: node.i18n('support', 'description5')
            }
          ]},
          {
            elem: 'text-block',
            content: [
            {
              block: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
              mods: {
                size: 'l'
              },
              content: node.i18n('support', 'rating')
            },
            {
              block: 'paragraph',
              mix: { block: 'page-support', elem: 'rate-title' },
              content: node.i18n('support', 'rating-descr')
            },
            {
              elem: 'rate-list',
              content: [
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '10'
                },
                node.i18n('support', '10')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '9'
                },
                node.i18n('support', '9')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '8'
                },
                node.i18n('support', '8')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '7'
                },
                node.i18n('support', '7')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '6'
                },
                node.i18n('support', '6')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '5'
                },
                node.i18n('support', '5')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '4'
                },
                node.i18n('support', '4')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '3'
                },
                node.i18n('support', '3')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '2'
                },
                node.i18n('support', '2')
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                {
                  elem: 'counter',
                  content: '1'
                },
                node.i18n('support', '1')
                ]
              }
              ]
            }
          ]}
        ]
      },
      {
        elem: 'footer',
        content: [
        {
          block: 'title',
          mix: { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
          mods: {
            size: 'l'
          },
          content: node.i18n('support', 'note')
        },
        {
          elem: 'info',
          content: [
            {
              elem: 'aside',
              content: [
              {
                block: 'image',
                mix: { block: 'page-support', elem: 'filmmaker' }
              },
              {
                block: 'description',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content: [
                  {
                    elem: 'name',
                    content: node.i18n('support', 'manskiy')
                  },
                  {
                    elem: 'role',
                    content: node.i18n('support', 'role')
                  }
                ]
              }
              ]
            },
            {
              elem: 'footer-content',
              content: [
              {
                block: 'paragraph',
                content: node.i18n('support', 'author1')
              },
              {
                block: 'paragraph',
                content: node.i18n('support', 'author2')
              },
              {
                block: 'paragraph',
                content: node.i18n('support', 'author3')
              }
              ]
            }
          ]
        }
        ]
      }
    ]
});
