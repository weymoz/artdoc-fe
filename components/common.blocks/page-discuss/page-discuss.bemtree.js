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
    const movie = Object.assign( {}, node.data.api.movie, {
      starts_in: node.data.api.starts_in,
      play: node.data.api.link
    } );

    const schedule = Object.assign( {}, node.data.api.schedule, {
      description: node.data.lang === 'en' ? 'At the beginning of the discussion, the page will be updated automatically' : 'При начале обсуждения страница обновится автоматически',
    } );
    const linkToDiscuss = node.data.lang === 'en' ? ' Link to discuss' : 'Пройдите по ссылке.'

    return [
      {
        elem: 'content',
        content: [
          {
            elem: 'title',
            content: node.data.lang === 'en' ? 'Discussion doesn\'t started yet' : 'Обсуждение еще не началось'
          },
          {
            block: 'paragraph',
            content: schedule.discuss_preview.replace(linkToDiscuss,'')
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
            movie: movie,
            lang: node.data.lang
          },
          {
            block: 'card-discuss',
            mods: {
              theme: 'artdoc-dark'
            },
            movie: movie,
            lang: node.data.lang
          }
        ]
      }
    ];
  })

)
