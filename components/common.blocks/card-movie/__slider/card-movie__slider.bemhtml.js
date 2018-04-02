block('card-movie').elem('slider')(

  match( node => !node._trailer && !node._screenshots && !node._screenshots.length ).def()(''),


  content()( node => {


      function parseVideo ( url ) {
        let type, frame;

        url.match( /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/ );

        if ( RegExp.$3.indexOf( 'youtu' ) > -1 ) {
          type = 'youtube';
          frame = '//www.youtube.com/embed/';
        } else if ( RegExp.$3.indexOf( 'vimeo' ) > -1 ) {
          type = 'vimeo';
          frame = '//player.vimeo.com/video/';
        }

        return {
          _trailer: url,
          _type: type,
          _frame: frame,
          _video_id: RegExp.$6
        };
      }

      if (node._screenshots && node._screenshots.length){
        let slides = node._screenshots;

        if ( node._cover && node._cover.id !== node._screenshots[0].id ) {
          slides.unshift( { id: node._cover.id, type: 'image' } );
        }

        if ( node._trailer ) {
          const video = parseVideo( node._trailer );
          slides.splice( 1, 0, { id: video._video_id, type: 'video', video: video } );
        }

        return slides.map( ( slide, index ) => {
          return {
            elem: 'slider-item',
            elemMods: {
              checked: !index,
              type: slide.type || 'image'
            },
            js: {
              image_id: slide.id
            },
            content: {
              block: 'image',
              mods: {
                'has-resize': slide.type !== 'video'
              },
              mix: { block: node.block, elem: 'image' },
              attrs: {
                onError: 'this.classList.add( "' + node.block + '__image_no-image" )'
              },
              url: (slide.video && slide.video._type === 'youtube')
                ? '//img.youtube.com/vi/' + slide.video._video_id + '/mqdefault.jpg'
                : slide.id,
              width: 100,
              height: 56,
              alt: ''
            }
          }
        })
    } else {
        let slides = [];

        if ( node._cover ) {
          slides.unshift( { id: node._cover.id, type: 'image' } );
        }

        if ( node._trailer ) {
          const video = parseVideo( node._trailer );
          slides.splice( 1, 0, { id: video._video_id, type: 'video', video: video } );
        }

        return slides.map( ( slide, index ) => {
          return {
            elem: 'slider-item',
            elemMods: {
              checked: !index,
              type: slide.type || 'image'
            },
            js: {
              image_id: slide.id
            },
            content: {
              block: 'image',
              mods: {
                'has-resize': slide.type !== 'video'
              },
              mix: { block: node.block, elem: 'image' },
              attrs: {
                onError: 'this.classList.add( "' + node.block + '__image_no-image" )'
              },
              url: (slide.video && slide.video._type === 'youtube')
                ? '//img.youtube.com/vi/' + slide.video._video_id + '/mqdefault.jpg'
                : slide.id,
              width: 100,
              height: 56,
              alt: ''
            }
          }
        })
      }
  })

)
