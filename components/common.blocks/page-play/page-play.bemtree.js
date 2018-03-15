block('page').addMods()( { theme: 'artdoc-dark' } );

block('page-play')(
  replace()( node => {
    // Move start timer to movie object
    const api = node.data.api;
    const movie = Object.assign( {}, api.movie, {
      starts_in: api.starts_in ? api.starts_in : 0,
      play: api.link,
      type: api.type,
      discuss_link: api.schedule ? '/cinema/discuss/' + node.data.url.search: '',
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
            mods: { view: 'play' },
            ticket: ticket,
            lang: node.data.lang
          }
        ]
      },
      {
        elem: 'content',
        elemMods: { gap: 'bottom' },
        content: [
          {
            block: 'card-movie',
            mods: { view: 'play' },
            movie: movie,
            lang: node.data.lang
          }
        ]
      },
      {
        block: 'club-footer',
        mix: { block: 'page', elem: 'club' }
      }
    ];
  })
)
