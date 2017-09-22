block('page-index').replace()(function() {

  // Функция для слайдера
  let slider = [];
  const linkPerSlide = 20;
  const categories = [
    {
      name: 'Все фильмы',
      id: null,
      code: 'all',
    },
    ...this.data.category
  ];
  let links = categories.length;
  const slidesCount = ( ( links - ( links % linkPerSlide ) ) / linkPerSlide ) + ( links % linkPerSlide ? 1 : 0 );

  for (let slidePage = 0; slidePage < slidesCount; slidePage++) {
    slider[ slidePage ] = [];
    for (let linkCount = 0; links > 0 && linkCount < linkPerSlide; linkCount++, links--) {
      let currentLink = categories[ categories.length - links ]
      slider[ slidePage ][ linkCount ] = {
        block: 'link',
        mods: { view: 'tag' },
        mix: { block: 'slider', elem: 'link' },
        url: currentLink.id ? '/movie/category-' + currentLink.code : '/movie',
        content: currentLink.name
      };
    }
  }

  const poster = this.data.poster.items.map( movie => {
    /*
     * Normalization
     */

    // Fix 3 hours offset
    let offset = ( new Date().getTimezoneOffset() / 60 );
    let dateFromServer = new Date( movie.date_gmt3 * 1000 );
    let dateUTC = dateFromServer.getTime() - ( dateFromServer.getTimezoneOffset() * 60000 );
    let correctDate = new Date( dateUTC + ( 3600000 * offset ) );
    movie.date_gmt3 = correctDate.getTime() / 1000;

    // // Folding
    return Object.assign( {}, movie.movie[0], { schedules: movie.sessions }, {
      date: movie.date_gmt3,
      discuss_link: movie.discuss_link,
      discuss_preview: movie.discuss_preview,
      premiere: movie.discuss_preview,
    } );
  } );


  return [
    {
      elem: 'content',
      content: [
        {
          elem: 'title',
          elemMods: { size: 'xl' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content:  'Архив и онлайн-сеансы документального кино на русском языке'
        },
        { block: 'slider', content: slider },
        { block: 'card-poster', poster: poster },
        {
          elem: 'title',
          elemMods: { size: 'xl' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: 'Новости и события'
        },
        { block: 'news' },
        {
          elem: 'title',
          elemMods: { size: 'xl' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: 'Авторские подборки'
        },
        {
          elem: 'collections',
          content: this.data.api.slice(0, 3).map( item => {
            return {
              block: 'card-selection',
              mods: {
                view: 'selections',
                theme: item.image ? 'artdoc' : 'artdoc-dark'
              },
              selection: item
            }
          } )
        },
      ]
    },
    {
      elem: 'content',
      elemMods: { width: 'tiny' },
      content: [
        {
          elem: 'title',
          elemMods: { size: 'xl' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: 'О проекте'
        },
        {
          block: 'paragraph',
          content: 'Артдокмедиа — это архив документального кино, независимого и актуального контента, снятого в основном на территории бывшего СССР с начала 2000-х годов. Наш киноархив устроен по классическому принципу синематеки: доступная база с информацией о фильмах, возможности просмотров, ретроспективы, тематические циклы. Большая часть нашей коллекции состоит из фильмов, снятых без государственного участия, а, значит, не находящихся в каких-либо архивах и фондовых хранилищах. Немало студий, производивших эти фильмы, на сегодняшний день прекратили свое существование. И для многих фильмов наш архив является единственным местом, сохраняющим эти картины для зрителя и для истории.'
        },
        {
          block: 'button',
          mods: { type: 'link' },
          text: 'Подробнее',
          url: '/about'
        }
      ]
    },
    {
      block: 'club-footer'
    }
  ]

})
