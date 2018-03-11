block('page-index').replace()( node => {

  // Функция для слайдера
  let slider = [];
  const linkPerSlide = 20;
  const categories = [
    {
      name: node.i18n('index', 'allMovies'),
      id: null,
      code: 'all',
      primary: true
    },
    ...node.data.lang === 'en' ? node.data.categoryEn : node.data.category
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
        mix: { block: 'slider', elem: 'link', elemMods: { primary: !!currentLink.primary } },
        url: currentLink.id ? '/movie/category-' + currentLink.code : '/movie',
        content: currentLink.name
      };
    }
  }


  let linkProvider = '/' + node.data.lang;




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
      content: [
      {
        elem: 'title',
        elemMods: { view: 'condensed-bold', size: 'xl' },
        mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
        content: {
          html: node.i18n('index', 'MainTitle')
        }
      },
      {
        block: 'button',
        mix: { block: 'page', elem: 'adaptive-link-btn' },
        mods: {
          type: 'link',
          size: 'xxl'
        },
        text: node.i18n('index', 'link-to-archive'),
        url: linkProvider + '/movie'
      }
      ]
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
          block: 'button',
          mix: { block: 'page', elem: 'adaptive-link-btn' },
          mods: {
            type: 'link',
            size: 'xxl',
            theme: 'artdoc'
          },
          text: node.i18n('index', 'link-to-online'),
          url: linkProvider + '/cinema'
        },
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl', gap: 'both' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: node.i18n('index', 'newsTitle')
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
          content: node.i18n('index', 'collectionsTitle')
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
              selection: item,
              lang: node.data.lang
            }
          } )
        },
        {
          block: 'paragraph',
          mods: { align: 'center' },
          mix: { block: 'page', elem: 'desktop-link-btn' },
          content: {
            block: 'button',
            mods: {
              type: 'link',
              size: 'xxl'
            },
            text: node.i18n('index', 'link-to-selection'),
            url: linkProvider + '/selection'
          }
        },
        {
          block: 'button',
          mix: { block: 'page', elem: 'adaptive-link-btn' },
          mods: {
            type: 'link',
            size: 'xxl'
          },
          text: node.i18n('index', 'link-to-online'),
          url: linkProvider + '/cinema'
        }
      ]
    },
    {
      elem: 'content',
      mix: { elem: 'about' },
      elemMods: { width: 'tiny', gap: 'bottom' },
      content: [
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl', gap: 'both' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: node.i18n('index', 'about'),
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
            mix: { block: 'page', elem: 'desktop-link-btn' },
            mods: {
              type: 'link',
              size: 'xxl'
            },
            text: node.i18n('index', 'more'),
            url: linkProvider + '/about'
          }
        },
        {
          block: 'button',
          mix: { block: 'page', elem: 'adaptive-link-btn' },
          mods: {
            type: 'link',
            size: 'xxl'
          },
          text: node.i18n('index', 'more'),
          url: linkProvider + '/about'
        }
      ]
    },
    {
      block: 'club-footer'
    }
  ]

})
