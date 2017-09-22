block('card-movie').mod('view', 'short')(

  def()( ( node, ctx ) => {
    const movie = node.mergeDeep( ctx.movie, {
      cover: { width: 130 }
    } );

    return applyNext( { 'ctx.movie': movie } );
  }),

  js()( ( node, ctx ) => {
    return {
      movie: ctx.movie
    }
  } ),

  content()( ( node, ctx ) => {
    const _session = ctx.movie.schedules[0];
    
    return [
      {
        elem: 'content',
        content: { elem: 'image' }
      },
      {
        elem: 'aside',
        content: [
          {
            elem: 'date',
            mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
            content: [
              {
                block: 'text',
                mods: { format: 'datetime' },
                format: 'DD MMMM',
                content: _session.time_gmt3
              },
              ', ',
              {
                block: 'text',
                mods: { caps: true },
                content: {
                  block: 'text',
                  mods: { format: 'datetime' },
                  format: 'dd',
                  content: _session.time_gmt3
                }
              }
            ]
          },
          { elem: 'name' }
        ]
      }
    ]
  })
);
