block('card-movie').elem('slider')(

  content()( node => {
    let slides = [
      { id: node._cover.id, type: 'image' }
    ]

    if ( node._trailer ) {
      slides.push( { id: node._cover.id, type: 'video' } );
    }

    return slides.map( ( slide, index ) => {
      return {
        elem: 'slider-item',
        elemMods: {
          checked: index ? false : true,
          type: slide.type
        },
        js: {
          image_id: slide.id
        },
        content: {
          block: 'image',
          url: slide.id,
          width: 100,
          height: 56
        }
      }
    } );
    
  })

)