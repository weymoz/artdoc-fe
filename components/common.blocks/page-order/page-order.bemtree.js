block('page-order')(

  replace()( node => {
    return [
      {
        elem: 'content',
        elemMods: {
          view: 'narrow'
        },
        content: [
          {
            block: 'breadcrumbs'
          },
          {
            elem: 'title',
            mods: {
              size: 'm'
            },
            content: 'Покупка билета на онлайн-сеанс'
          },
          {
            block: 'card-movie',
            mods: {
              view: 'order'
            },
            movie: node.data.api.movie
          },
          {
            block: 'paragraph',
            mix: [
              { block: node.block, elem: 'ticket-left' },
              { block: 'font', mods: { family: 'pt-mono', loaded: true } }
            ],
            content: 'Осталось билетов: ' + node.data.api.tickets_left
          },
          {
            elem: 'section',
            mix: { block: node.block, elem: 'order' },
            content: [
              {
                block: node.block,
                elem: 'aside',
                content: [
                  {
                    block: 'calendar',
                    mix: { block: node.block, elem: 'info' },
                    mods: {
                      view: 'ticket-case'
                    },
                    date: node.data.api.time_gmt3
                  },
                  {
                    block: node.block,
                    elem: 'info',
                    content: {
                      block: 'text',
                      mods: {
                        format: 'datetime'
                      },
                      format: 'HH:mm',
                      content: node.data.api.time_gmt3 * 1000
                    },
                  },
                  {
                    block: node.block,
                    elem: 'info',
                    content: {
                      html: node.data.api.price.price + '&nbsp;₽'
                    }
                  }
                ]
              },
              {
                block: 'form',
                mix: { block: node.block, elem: 'form' },
                mods: {
                  view: 'order'
                },
                session: node.data.api.id,
                csrf: node.data.csrf
              }
            ]
          }
        ]
      }
    ];
  })

)