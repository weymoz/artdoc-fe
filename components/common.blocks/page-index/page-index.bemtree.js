block('page-index').replace()(function() {

  let slider = [];
  const linkPerSlide = 20;
  const categories = this.data.category;
  let links = categories.length;
  const slidesCount = ( ( links - ( links % linkPerSlide ) ) / linkPerSlide ) + ( links % linkPerSlide ? 1 : 0 );

  for (let slidePage = 0; slidePage < slidesCount; slidePage++) {
    slider[ slidePage ] = [];
    for (let linkCount = 0; links > 0 && linkCount < linkPerSlide; linkCount++, links--) {
      let currentLink = categories[ categories.length - links ]
      slider[ slidePage ][ linkCount ] = {
        block: 'link',
        mods: {
          view: 'tag'
        },
        mix: { block: 'slider', elem: 'link' },
        url: '/movie/category-' + currentLink.code,
        content: currentLink.name
      };
    }
  }

  return [
    {
      elem: 'content',
      content: [
        {
          elem: 'title',
          elemMods: {
            size: 'xl'
          },
          content:  'Архив и онлайн-сеансы документального кино на русском языке'
        },
        {
          block: 'slider',
          content: slider
        },
        {
          elem: 'collections',
          content: this.data.api.map( item => {
            return {
              block: 'card-selection',
              mods: {
                view: [ 'selections' ],
                theme: 'artdoc'
              },
              selection: item
            }
          } )
        },
        {
            elem: 'title',
            elemMods: {
            size: 'xl'
            },
            content: 'О проекте'
        },
        {
          block: 'info',
          content: [
          {
            elem: 'content',
            content: 'Артдокмедиа — это архив документального кино, независимого и актуального контента, снятого на территории бывшего СССР с начала 2000-х годов. Наш киноархив устроен по классическому принципу синематеки: доступная база с информацией о фильмах, возможности просмотров, ретроспективы, тематические циклы. Большая часть нашей коллекции состоит из фильмов, снятых без государственного участия, а, значит, не находящихся в каких-либо архивах и фондовых хранилищах. Немало студий, производивших эти фильмы, на сегодняшний день прекратили свое существование. К сожалению, некоторых авторов уже нет в живых. И для многих фильмов наш архив является единственным местом, сохраняющим эти картины для зрителя и для истории.'
          }
          ]
        }
      ]
    }
  ]
})





