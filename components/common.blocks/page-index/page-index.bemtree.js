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
          view: 'tag',
          size: 'l'
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
        }
      ]
    }
  ]
})





