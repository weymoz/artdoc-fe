block('page-schedule').replace()(function() {

  const _movies = this.data.api;
  let schedule = [];

  _movies.forEach( movie => {
    /*
     * Normalization
     */

    // Fix 3 hours offset
    let offset = ( new Date().getTimezoneOffset() / 60 );
    let dateFromServer = new Date( movie.date_gmt3 * 1000 );
    let dateUTC = dateFromServer.getTime() - ( dateFromServer.getTimezoneOffset() * 60000 );
    let correctDate = new Date( dateUTC + ( 3600000 * offset ) );
    movie.date_gmt3 = correctDate.getTime() / 1000;

    // Folding
    let data = {
      date: movie.date_gmt3,
      discuss_link: movie.discuss_link,
      discuss_preview: movie.discuss_preview,
      premiere: movie.discuss_preview
    }

    if ( schedule.length && ( schedule[ schedule.length - 1 ].movie_id === movie.movie[0].movie_id)) {
      schedule[ schedule.length - 1 ].schedules.push( data );
    } else {
      schedule.push( Object.assign( movie.movie[ 0 ], { schedules: [ data ] } ) );
    }

  });

  const today = new Date().toDateString();
  const promoBlock = schedule[0].schedules
    .filter( movie => new Date ( movie.date * 1000 ).toDateString() === today )
    .length
    ? {
        block: 'card-movie',
        mods: { view: 'promo' },
        movie: schedule.shift(),
        lang: this.data.lang
      }
    : '';

  return [
    {
      elem: 'content',
      elemMods: { gap: 'bottom' },
      content: [
        {
          block: 'breadcrumbs',
          mix: { block: 'page', elem: 'breadcrumbs' }
        },
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl', gap: 'top' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: this.data.lang === 'en' ? 'Online showtimes' : 'Онлайн-киносеансы'
        },
        promoBlock,
        schedule.map( item => {
          return {
            block: 'card-movie',
            mods: { view: 'schedule' },
            movie: item,
            lang: this.data.lang
          }
        } ),
      ]
    },
    { block: 'club-footer' }
  ];
});
