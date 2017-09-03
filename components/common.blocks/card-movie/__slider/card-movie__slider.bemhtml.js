block('card-movie').elem('slider')(

  match( node => !node._screenshots || !node._screenshots.length ).def()(''),

  content()( node => {
    let slides = node._screenshots;

    if ( node._cover ) {
      slides.unshift( { id: node._cover.id, type: 'image' } );
    }

    if ( node._trailer ) {
      slides.splice( 1, 0, { id: node._screenshots[0].id, type: 'video' } );
    }

    return slides.map( ( slide, index ) => {
      return {
        elem: 'slider-item',
        elemMods: {
          checked: index ? false : true,
          type: slide.type || 'image'
        },
        js: {
          image_id: slide.id
        },
        content: {
          block: 'image',
          mix: { block: node.block, elem: 'image' },
          attrs: {
            onError: 'this.classList.add( "' + node.block + '__image_no-image" )'
          },
          url: slide.id,
          width: 100,
          height: 56,
          alt: ''
        }
      }
    } );
    
  })

)