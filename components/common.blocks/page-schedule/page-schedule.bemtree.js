block('page-schedule').replace()(function() {

  const _movies = this.data.api;

  let schedule = [];

  _movies.forEach( movie => {
    if ( schedule.length && ( schedule[ schedule.length - 1 ].movie_id === movie.movie[0].movie_id)) {
      schedule[ schedule.length - 1 ].schedules.push( movie.date_gmt3 );
    } else {
      schedule.push( Object.assign( movie.movie[ 0 ], { schedules: [ movie.date_gmt3 ] } ) );
    }
  });

  const firstCinemaDate = new Date( schedule[0].schedules[0] * 1000 ).getDate();
  const today = new Date().getDate();
  const promoBlock = firstCinemaDate === today
    ? {
      block: 'card-movie',
      mods: {
        view: 'promo'
      },
      movie: schedule.shift()
    }
    : '';

  return [
    {
      elem: 'content',
      content: [
        {
          block: 'breadcrumbs'
        },
        {
          elem: 'title',
          content: 'Онлайн-киносеансы'
        },
        promoBlock,
        schedule.map( item => {
          return {
            block: 'card-movie',
            mods: {
              view: 'schedule'
            },
            movie: item
          }
        } )
      ]
    }
  ];
});
