block( 'page' ).def()( node => {
  // Move start timer to movie object
  node.data.api.movie.starts_in = node.data.api.starts_in;

  return applyNext( { 'ctx.mods.theme': 'artdoc-dark' } )
} );

block('page-play')(

  replace()( node => {
    return [
      {
        elem: 'content',
        content: [
          {
            block: 'breadcrumbs'
          },
          {
            block: 'card-movie',
            mods: {
              view: 'play',
              theme: 'artdoc-dark'
            },
            movie: node.data.api.movie,
            link: node.data.api.link
          }
        ]
      }
    ];
  })

)