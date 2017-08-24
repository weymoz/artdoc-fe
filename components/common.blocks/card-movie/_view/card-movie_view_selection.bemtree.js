block('card-movie').mod('view', 'selection')(

  def()( ( node, ctx ) => {
    const _movie = ctx.movie;
    _movie.url = _movie.code ? '/movie/' + _movie.code : null;

    return applyNext();
  }),

  content()( () => {
    return [
      {
        elem: 'content',
        content: [
          { elem: 'cover' },
          {
            elem: 'list',
            content: [
              { elem: 'director' }
            ]
          },
          { elem: 'orig-name' },
          { elem: 'name' },
          {
            elem: 'list',
            content: [
              { elem: 'year' },
              { elem: 'countries' }
            ]
          }
        ]
      }
    ];
  })

);
