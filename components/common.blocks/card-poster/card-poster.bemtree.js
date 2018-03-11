block('card-poster')(
  content()( ( node, ctx ) => {
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
                movie: ctx.poster[0],
                lang: node.data.lang
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
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } },
              { block: 'card-poster', elem: 'aside_title' }
            ],
            content: node.i18n('card', 'next')
          },
          {
            elem: 'movies',
            content: ctx.poster.map( ( movie, index ) => {
              return {
                block: 'card-movie',
                js: { lang: node.data.lang },
                mix: { block: node.block, elem: 'item', elemMods: { selected: !index } },
                mods: { view: 'short', theme: 'artdoc-dark' },
                movie: movie,
                lang: node.data.lang
              }
            } )
          },
          {
            block: 'link',
            mix: { block: 'card-poster', elem: 'link' },
            url: '/' + node.data.lang + '/cinema',
            content: [
              node.i18n('card', 'all'),
              { elem: 'icon' }
            ]
          }
        ]
      }
    ]
  })
);
