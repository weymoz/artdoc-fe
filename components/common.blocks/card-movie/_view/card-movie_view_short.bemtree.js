block('card-movie').mod('view', 'short')(

  def()( ( node, ctx ) => {
    const _movie = ctx.movie;
    _movie.url = _movie.code ? '/movie/' + _movie.code : null;
    _movie.cover.width = 130;

    return applyNext();
  }),

  js()( ( node, ctx ) => {
    return {
      movie: ctx.movie
    }
  } ),

  content()( ( node, ctx ) => {
    const _session = ctx.session;
    return [
      {
        elem: 'short-content',
        content: [
          { elem: 'image' },
        ]
      },
      {
        elem: 'short-aside',
        content: [
          {
            elem: 'date',
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
            content: [
            {
              block: 'text',
              mods: {
                format: 'datetime'
              },
              format: 'DD MMMM',
              content: _session.time_gmt3
            },
            ', ',
            {
              block: 'text',
              mods: {
                caps: true
              },
              content: [
              {
                block: 'text',
                mods: {
                  format: 'datetime',
                },
                format: 'dd',
                content: _session.time_gmt3
              }
              ]
            }
            ]
          },
          {
            elem: 'name'
          }
        ]
      }
    ]
  })
);
