block('card-movie').mod('view', 'short')(

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
          { elem: 'cover' },
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
