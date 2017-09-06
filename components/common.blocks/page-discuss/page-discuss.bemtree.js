block( 'page' ).def()( ( node ) => {

  node.ctx.head.push({
    elem: 'meta',
    attrs: {
      'http-equiv': 'refresh',
      content: "55"
    }
  });
  return applyNext( { 'ctx.mods.theme': 'artdoc-dark' } )

} );

block('page-discuss')(

  replace()( node => {
    // Move start timer to movie object
    const movie = node.mergeDeep( node.data.api.movie, {
      starts_in: node.data.api.starts_in,
      play: node.data.api.link
    } );

    const schedule = node.mergeDeep( node.data.api.schedule, {
      description: 'При начале обсуждения страница обновится автоматически',
    } );

    return [
      {
        elem: 'content',
        content: [
          {
            elem: 'title',
            content: 'Обсуждение еще не началось'
          },
          {
            block: 'paragraph',
            content: schedule.discuss_preview.replace('Пройдите по ссылке.','')
          },
          {
            block: 'paragraph',
            content: schedule.description
          },
          {
            block: 'breadcrumbs'
          },
          {
            block: 'card-movie',
            mods: {
              view: 'order'
            },
            movie: movie
          },
          {
            block: 'card-discuss',
            mods: {
              theme: 'artdoc-dark'
            },
            movie: movie
          }
        ]
      }
    ];
  })

)
