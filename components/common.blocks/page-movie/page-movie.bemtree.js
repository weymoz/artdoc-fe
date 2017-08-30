block('page-movie').replace()(function() {

  const _movie = this.data.api;

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
            view: 'full'
          },
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
    {
      elem: 'content',
      content: {
        block: 'rewards'
      }
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
});
