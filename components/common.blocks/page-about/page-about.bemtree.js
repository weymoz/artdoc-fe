block('page-about').content()( function( node ) {
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
                block: 'page-about', elem: 'main-title'
              },
              {
               block: 'font', mods: { family: 'helvetica-neue-bold', loaded: true }
              }],
              mods: {
                size: 'xl'
              },
              content: node.i18n('about', 'title')
            },
            {
              block: 'paragraph',
              content: node.i18n('about', 'description1')
            },
            {
              block: 'paragraph',
              content: node.i18n('about', 'description2')
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
              content: node.i18n('about', 'showtime')
            },
            {
              block: 'paragraph',
              content: [
              node.i18n('about', 'description3'),
              { block: 'link',
                url: '/' + node.data.lang + '/cinema',
                mix: { block: 'page-about', elem: 'link' },
                content: node.i18n('about', 'link')
              },
              node.i18n('about', 'description4')
              ]
            },
            {
              block: 'paragraph',
              content: node.i18n('about', 'description5')
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
              content: node.i18n('about', 'rating')
            },
            {
              block: 'paragraph',
              mix: { block: 'page-about', elem: 'rate-title' },
              content: node.i18n('about', 'rating-descr')
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
                node.i18n('about', '10')
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
                node.i18n('about', '9')
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
                node.i18n('about', '8')
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
                node.i18n('about', '7')
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
                node.i18n('about', '6')
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
                node.i18n('about', '5')
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
                node.i18n('about', '4')
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
                node.i18n('about', '3')
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
                node.i18n('about', '2')
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
                node.i18n('about', '1')
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
          content: node.i18n('about', 'note')
        },
        {
          elem: 'info',
          content: [
            {
              elem: 'aside',
              content: [
              {
                block: 'image',
                mix: { block: 'page-about', elem: 'filmmaker' }
              },
              {
                block: 'description',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content: [
                  {
                    elem: 'name',
                    content: node.i18n('about', 'manskiy')
                  },
                  {
                    elem: 'role',
                    content: node.i18n('about', 'role')
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
                content: node.i18n('about', 'author1')
              },
              {
                block: 'paragraph',
                content: node.i18n('about', 'author2')
              },
              {
                block: 'paragraph',
                content: node.i18n('about', 'author3')
              }
              ]
            }
          ]
        }
        ]
      }
    ]
});
