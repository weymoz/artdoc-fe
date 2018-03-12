block('page-movie').replace()( node => {
  const _movie = node.data.api;
  const _lang = node.data.lang;

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
          movie: _movie,
          lang: _lang
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
          movie: _movie,
          lang: _lang
        }
      ]
    } : '',
    {
      elem: 'content',
      elemMods: { gap: _movie.schedules && _movie.schedules.length ? 'top' : false },
      content: {
        block: 'movie-about',
        movie: _movie,
        lang: _lang
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
