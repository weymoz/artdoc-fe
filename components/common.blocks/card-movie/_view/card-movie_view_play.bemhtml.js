block('card-movie').mod('view', 'play')(

  def()( ( node, ctx ) => {
    const movie = node.mergeDeep( ctx.movie, {
      cover: { width: 1316 },
      url: ctx.movie.code ? '/movie/' + ctx.movie.code : null,
    } );

    return applyNext( { 'ctx.movie': movie } );
  } ),

  content()( node => {
    let status = 'finish';
    if ( node._starts_in ) {
      status = 'get'
    } else if ( node._play ) {
      status = 'ready'
    }

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
            content: [
              status !== 'ready' && { elem: 'image' },
              status === 'ready' && { elem: 'video', elemMods: { visible: true }, content: node._play },
              {
                elem: 'cover',
                content: [
                  { elem: 'play-status', elemMods: { status: status } }
                ]
              }
            ]
          },
          status === 'finish' && ( node._discuss_link || node._discuss_preview ) && {
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
