block('search').elem('author')(

  match( node => !node._api.author ).def()(''),

  content()( node => {
    return node._api.author && node._api.author.length
      ? [
          {
            elem: 'title',
            elemMods: { view: 'condensed-bold', size: 'm' },
            mix: { block: 'heading', mods: { caps: true, size: 'xs' } },
            content: 'Авторы ' + node._api.author.length
          },
          node._api.author.map( author => {
            return {
              block: 'card-author',
              mods: { size: 'l' },
              author: author,
              color: '#fff'
            }
          } )
        ]
      : ''
  } )

)
