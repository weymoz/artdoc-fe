block('card-poster')(
  content()( ( node, ctx ) => {
    return [
    {
      elem: 'content',
      content: [
      // {
      //   elem: 'control',
      //   content:[
      //   {
      //     block: 'button',
      //     mods: {
      //       theme: 'artdoc',
      //       disabled: true
      //     },
      //     mix: { block: 'card-poster', elem: 'prev' }
      //   },
      //   {
      //     block: 'button',
      //     mods: {
      //       theme: 'artdoc'
      //     },
      //     mix: { block: 'card-poster', elem: 'next' }
      //   }
      //   ]
      // },
      {
        elem: 'preview',
        content: [
          {
            block: 'card-movie',
            mods: {
              view: 'slide',
              theme: 'artdoc-dark'
            },
            movie: ctx.poster.items[0].movie[0],
            sessions: ctx.poster.items[0].sessions
          }
        ]
      }
      ]
    },
    {
      elem: 'aside',
      content: [
      {
        elem: 'title',
        mix: [
          { block: 'font',
            mods: { family: 'helvetica-condensed', loaded: true }
          },
          {
            block: 'card-poster', elem: 'aside_title'
          }
          ],
        content: 'Будущие киносеансы'
      },
      {
        elem: 'movies',
        content: [
              ctx.poster.items.map( ( item, index ) => {
                return {
                  block: 'card-movie',
                  mix: { block: node.block, elem: 'item', elemMods: { selected: index ? '' : true } },
                  mods: {
                      view: 'short',
                      theme: 'artdoc-dark'
                  },
                  movie: item.movie[0],
                  session: item.sessions[0]
                }
              } )
            ]
      },
      {
        block: 'link',
        mix: { block: 'card-poster', elem: 'link' },
        url: '/cinema',
        content: [ 'Смотреть все' ]
      }
      ]
    }
    ]
  })
);
