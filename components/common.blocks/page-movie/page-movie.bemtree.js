block('page-movie').replace()( node => {

  const _movie = node.data.api;
  return [
    {
      elem: 'content',
      content: [
        {
          block: 'breadcrumbs',
          mix: { block: 'page', elem: 'breadcrumbs' },
          title: _movie.name
        },
        {
          block: 'card-movie',
          mods: { view: 'full' },
          movie: _movie
        }
      ]
    },
    _movie.schedules && _movie.schedules.length ? {
      elem: 'section',
      attrs: { id: 'schedule' },
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
      elemMods: { gap: _movie.schedules && _movie.schedules.length ? 'top' : false },
      content: {
        block: 'movie-about',
        movie: _movie
      }
    },
    {
      elem: 'content',
      elemMods: { gap: 'bottom' },
      content: { block: 'rewards' }
    },
    { block: 'club-footer' }
  ];
});
