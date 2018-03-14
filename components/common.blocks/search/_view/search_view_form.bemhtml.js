block('search').mod('view', 'form')(
  content()( (node, ctx) => {
    return [
      { elem: 'content', lang: ctx.lang },
      { elem: 'footer', lang: ctx.lang }
    ]
  } ),

  elem('content')(
    content()( (node, ctx) => {
      return [
        { elem: 'movie', lang: ctx.lang },
        { elem: 'tag', lang: ctx.lang },
        { elem: 'author', lang: ctx.lang }
      ]
    } )
  ),

  elem('footer')(
    match( node => !node._api.query ).def()(''),
    content()( (node, ctx) => {
      return {
        block: 'paragraph',
        mods: { align: 'right' },
        content: {
          block: 'link',
          mods: { view: 'text' },
          url: '/' + ctx.lang + '/search?q=' + node._api.query,
          content: ctx.lang === 'en' ? 'Show all results >' : 'Показать все результаты >'
        }
      }
    }),

    match( node => ( !node._api.tags || ( node._api.tags && !node._api.tags.length ) ) &&
                   ( !node._api.movie || ( node._api.movie && !node._api.movie.length ) ) &&
                   ( !node._api.author || ( node._api.author && !node._api.author.length ) ) &&
                   node._api.query
    ).content()( ( node, ctx ) => {
      let first = ctx.lang === 'en' ? 'Unfortunately, we did not find anything for «' : 'К сожалению, мы ничего не нашли по запросу «';
      let second = ctx.lang === 'en' ? 'Try again or check the movie catalog.' : 'Попробуйте еще раз или загляните в каталог фильмов.';
      return {
        block: 'paragraph',
        mods: { align: 'center' },
        content: [
          first + node._api.query + '».',
          { tag: 'br' },
          second
        ]
      }
    })
  )
)
