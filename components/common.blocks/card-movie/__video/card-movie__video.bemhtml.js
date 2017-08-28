block( 'card-movie' ).elem( 'video' )(

  match( ( node, ctx ) => !ctx.content || !node._trailer ).def()( '' ),

  def()( ( node, ctx ) => {
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

    const video = parseVideo( ctx.content || node._trailer );
    
    return video._type ? applyNext( video ) : '';
  } ),
  
  tag()('iframe'),

  addAttrs()( node => {
    return {
      trailer: node._trailer,
      frameborder: 0,
      webkitallowfullscreen: true,
      mozallowfullscreen: true,
      allowfullscreen: true,
      src: node._frame + node._video_id + '?showinfo=0'
    }
  } ),

  wrap()( ( node, ctx ) => {
    return {
      elem: 'video-container',
      elemMods: node.elemMods,
      content: ctx
    }
  })

)
