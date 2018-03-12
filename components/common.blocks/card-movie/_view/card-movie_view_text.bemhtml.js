block('card-movie').mod('view', 'text')(

  def()( ( node, ctx ) => {

    let lang = ctx.lang || node._lang;

    return applyNext( {
      'ctx.movie.url': ctx.movie.code ? '/' + lang + '/movie/' + ctx.movie.code : null
    } );
  }),

  elem('orig-name')(
    def()( () => {
      return applyNext();
    } ),
    appendContent()( () => {
      return {
        html: ',&nbsp;'
      }
    })
  ),

  content()( () => {
    return [
      {
        elem: 'content',
        elemMods: { type: 'link' },
        content: [
          { elem: 'name' },
          { elem: 'orig-name' },
          { elem: 'year' }
        ]
      }
    ];
  })
);
