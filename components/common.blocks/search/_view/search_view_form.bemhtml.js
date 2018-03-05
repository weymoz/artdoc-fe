block('search').mod('view', 'form')(
  content()( () => {
    return [
      { elem: 'content' },
      { elem: 'footer' }
    ]
  } ),

  elem('content')(
    content()( () => {
      return [
        { elem: 'movie' },
        { elem: 'tag' },
        { elem: 'author' }
      ]
    } )
  ),

  elem('footer')(
    match( node => !node._api.query ).def()(''),
    content()( node => {
      return {
        block: 'paragraph',
        mods: { align: 'right' },
        content: {
          block: 'link',
          mods: { view: 'text' },
          url: '/search?q=' + node._api.query,
          content: 'Показать все результаты >'
        }
      }
    }),
    match( node => ( !node._api.tags || ( node._api.tags && !node._api.tags.length ) ) &&
                   ( !node._api.movie || ( node._api.movie && !node._api.movie.length ) ) &&
                   ( !node._api.author || ( node._api.author && !node._api.author.length ) ) &&
                   node._api.query
    ).content()( node => {
      return {
        block: 'paragraph',
        mods: { align: 'center' },
        content: [
          'К сожалению, мы ничего не нашли по запросу «' + node._api.query + '».',
          { tag: 'br' },
          'Попробуйте еще раз или загляните в каталог фильмов.'
        ]
      }
    })
  )
)
