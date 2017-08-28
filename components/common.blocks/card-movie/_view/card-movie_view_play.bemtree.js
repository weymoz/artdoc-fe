block('card-movie').mod('view', 'play')(

  def()( ( node, ctx ) => {
    const _movie = ctx.movie;
    _movie.trailer = 'https://vimeo.com/102787065';
    _movie.cover.width = 1316;

    // ctx.movie.trailer = 'https://youtu.be/TSfTmeq0ne0'
    return applyNext();
  } ),

  content()( ( node, ctx ) => {

    return [
      {
        elem: 'section',
        elemMods: { view: 'title' },
        content: [
          { elem: 'orig-name' },
          { elem: 'name' },
        ]
      },
      {
        elem: 'section',
        content: [
          {
            elem: 'content',
            // elemMods: { view: 'cover' },
            content: [
              { elem: 'image' },
              // { elem: 'video', elemMods: { visible: true }, content: ctx.movie.trailer },
              {
                elem: 'cover',
                content: [
                  { elem: 'play-status' }
                ]
              }
            ]
          },
          {
            elem: 'aside',
            content: [
              { elem: 'discussion' }
            ]
          }
        ]
      },
      {
        elem: 'section',
        elemMods: { view: 'info' },
        content: [
          {
            elem: 'list',
            elemMods: { delimiter: 'vertical' },
            content: [
              { elem: 'director' },
              { elem: 'countries' },
              { elem: 'year' }
            ]
          },
          {
            elem: 'list',
            content: [
              { elem: 'tvpg' },
              { elem: 'duration' },
              { elem: 'language' },
              { elem: 'subs' }
            ]
          },
          { elem: 'description' }
        ]
      },
    ];
  })

)