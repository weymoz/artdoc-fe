block('card-poster')(
  content()( ( node, ctx ) => {
    // console.log( ctx.poster[0] );
    return [
      {
        elem: 'content',
        content: [
          {
            elem: 'preview',
            content: [
              {
                block: 'card-movie',
                mods: { view: 'slide', theme: 'artdoc-dark' },
                movie: ctx.poster[0]
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
              { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              { block: 'card-poster', elem: 'aside_title' }
            ],
            content: 'Будущие киносеансы'
          },
          {
            elem: 'movies',
            content: ctx.poster.map( ( movie, index ) => {
              return {
                block: 'card-movie',
                mix: { block: node.block, elem: 'item', elemMods: { selected: !index } },
                mods: { view: 'short', theme: 'artdoc-dark' },
                movie: movie
              }
            } )
          },
          {
            block: 'link',
            mix: { block: 'card-poster', elem: 'link' },
            url: '/cinema',
            content: [
              'Смотреть все',
              { elem: 'icon' }
            ]
          }
        ]
      }
    ]
  })
);
