block( 'page' ).def()( () => {
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