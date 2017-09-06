block( 'page' ).def()( () => {

  return applyNext( { 'ctx.mods.theme': 'artdoc-dark' } )

} );

block('page-play')(

  replace()( node => {
    // Move start timer to movie object
    const api = node.data.api;
    const movie = node.mergeDeep( api.movie, {
      starts_in: api.starts_in,
      play: api.link,
      discuss_link: '/cinema/discuss/' + node.data.url.search,
      discuss_preview: api.schedule ? api.schedule.discuss_preview : ''
    } );

    let ticket =  api.session;
    if ( ticket ) {
      ticket.city = ticket.city[0];
    }

    return [
      {
        elem: 'content',
        content: [
          {
            block: 'card-ticket',
            mods: {
              view: 'play'
            },
            ticket: ticket
          }
        ]
      },
      {
        elem: 'content',
        content: [
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
