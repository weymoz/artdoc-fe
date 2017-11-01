block('search').mod('view', 'form')(
  content()( () => {
    return [ 'movie', 'tag' ].map( elem => {
      return {
        elem: elem
      }
    } )
  } ),
  match( ( node, ctx ) => ctx.query && node._api && node._api.tags && node._api.tags.length ).appendContent()( ( node, ctx ) => {
    return {
      block: 'paragraph',
      mods: { align: 'right' },
      content: {
        block: 'link',
        mods: { view: 'text' },
        url: '/search?q=' + ctx.query,
        content: 'Показать все результаты >'
      }
    }
  }),
  match( ( node, ctx ) => ctx.query && node._api && node._api.tags && !node._api.tags.length ).appendContent()( ( node, ctx ) => {
    return {
      block: 'paragraph',
      mods: { align: 'center' },
      content: [
        'К сожалению, мы ничего не нашли по запросу «' + ctx.query + '».',
        { tag: 'br' },
        'Попробуйте еще раз или загляните в каталог фильмов.'
      ]
    }
  } )
)