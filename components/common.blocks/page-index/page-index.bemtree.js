block('page-index').replace()( node => {
  // Функция для слайдера
  let slider = [];
  const linkPerSlide = 20;
  const categories = [
    {
      name: 'Все фильмы',
      id: null,
      code: 'all',
    },
    ...node.data.category
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

  /*
   * Normalization
   */
  const poster = node.data.poster.items.map( movie => {
    // Fix 3 hours offset
    let offset = ( new Date().getTimezoneOffset() / 60 );
    let dateFromServer = new Date( movie.date_gmt3 * 1000 );
    let dateUTC = dateFromServer.getTime() - ( dateFromServer.getTimezoneOffset() * 60000 );
    let correctDate = new Date( dateUTC + ( 3600000 * offset ) );
    movie.date_gmt3 = correctDate.getTime() / 1000;

    // Folding
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
      elemMods: { width: 'narrow' },
      content: {
        elem: 'title',
        elemMods: { view: 'condensed-bold', size: 'xl' },
        mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
        content: {
          html: 'Архив и онлайн-сеансы документального кино на&nbsp;русском языке'
        }
      }
    },
    {
      elem: 'content',
      content: [
        {
          block: 'slider',
          mix: { block: 'page', elem: 'slider' },
          content: slider
        },
        {
          block: 'card-poster',
          mix: { block: 'page', elem: 'poster' },
          poster: poster
        },
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl', gap: 'both' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: 'Новости и события'
        },
        {
          block: 'news',
          mix: { block: 'page', elem: 'news' },
          news: node.data.news
        },
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl', gap: 'both' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: 'Авторские подборки'
        },
        {
          elem: 'collections',
          content: node.data.api && node.data.api.map( item => {
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
        {
          block: 'paragraph',
          mods: { align: 'center' },
          content: {
            block: 'button',
            mods: {
              type: 'link',
              size: 'xxl'
            },
            text: 'Смотреть все подборки',
            url: '/selection'
          }
        }
      ]
    },
    {
      elem: 'content',
      mix: { elem: 'about' },
      elemMods: { width: 'tiny' },
      content: [
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl', gap: 'both' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: 'О проекте'
        },
        {
          block: 'paragraph',
          mods: { align: 'center' },
          content: [
            'АртдокМедиа — это архив документального кино, снятого в странах бывшего СССР с начала 2000-х годов. Каталог устроен по классическому принципу синематеки: база с информацией о фильмах, фотографиями, трейлерами, доступу к просмотру, подборками по темам и ретроспективами. ',
            'Большая часть нашей коллекции состоит из фильмов, которые сняты без государственного участия, а значит не находятся в архивах и фондовых хранилищах. Немало студий, производивших эти фильмы, прекратили своё существование. Поэтому для многих фильмов наш сайт является единственным местом, сохраняющим эти картины для зрителя и для истории.'
          ]
        },
        {
          block: 'paragraph',
          mods: { align: 'center' },
          content: {
            block: 'button',
            mods: {
              type: 'link',
              size: 'xxl'
            },
            text: 'Подробнее',
            url: '/about'
          }
        },
      ]
    },
    {
      block: 'club-footer'
    }
  ]

})
