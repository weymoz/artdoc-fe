block('card-movie').mod('view', 'full').content()( ( node, ctx ) => {
  return [
    {
      elem: 'content',
      content: [
        { elem: 'cover' },
        { elem: 'video', content: ctx.movie.trailer }
      ]
    },
    {
      elem: 'aside',
      content: [
        { elem: 'orig-name' },
        { elem: 'name' },
        {
          elem: 'list',
          elemMods: {
            delimiter: 'vertical'
          },
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
        { elem: 'buy', elemMods: { size: 'l' } },
        { elem: 'description' }
      ]
    },
  ];
})
