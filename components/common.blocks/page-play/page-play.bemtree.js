block( 'page' ).def()( () => {

  return applyNext( { 'ctx.mods.theme': 'artdoc-dark' } )

} );

block('page-play')(

  replace()( node => {
    // Move start timer to movie object
    const movie = node.mergeDeep( node.data.api.movie, {
      starts_in: node.data.api.starts_in,
      play: node.data.api.link
    } );

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
            movie: movie
          }
        ]
      },
      {
        block: 'section',
        content: [
        {
          block: 'club-footer',
          mix: { block: 'page', elem: 'club' }
        }
        ]
      }
    ];
  })

)
