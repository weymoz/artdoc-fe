block('page-movie').replace()( node => {

  const _movie = node.data.api;

  // Add promo
  const promo = node.data.promo;
  _movie.sessions.forEach( session => {
    if ( promo.meduza && promo.meduza.includes( session.session.id ) ) {
      session.session.promo = 'meduza'
    } else {
      session.session.promo = null;
    }
  } );

  return [
    {
      elem: 'content',
      content: [
        { block: 'breadcrumbs' },
        {
          block: 'card-movie',
          mods: { view: 'full' },
          movie: _movie
        }
      ]
    },
    _movie.schedules && _movie.schedules.length ? {
      elem: 'section',
      content: [
        {
          block: 'ticket-case',
          mix: { block: 'page', elem: 'content' },
          movie: _movie
        }
      ]
    } : '',
    {
      elem: 'content',
      content: {
        block: 'movie-about',
        movie: _movie
      }
    },
    { elem: 'content', content: { block: 'rewards' } },
    { block: 'club-footer' }
  ];
});
