block('card-movie').mod('view', 'play')(
  def()((node, ctx) => {
    ctx.movie.cover = ctx.movie.cover || {};
    let lang = ctx.lang || node._lang;

    return applyNext({
      'ctx.movie.cover.width': 1316,
      'ctx.movie.url': ctx.movie.code
        ? '/' + lang + '/movie/' + ctx.movie.code
        : null
    });
  }),

  content()(node => {
    let status = 'finish';

    if (node._starts_in) {
      status = 'get';
    } else if (node._play) {
      status = 'ready';
    }

    return [
      {
        elem: 'section',
        elemMods: { view: 'title' },
        content: [
          { elem: 'orig-name' },
          {
            elem: 'name',
            elemMods: { 'has-dot': true, size: 'xl', link: true }
          }
        ]
      },
      {
        elem: 'section',
        content: [
          {
            elem: 'content',
            content: [
              status !== 'ready' && { elem: 'image' },
              status === 'ready' && {
                elem: 'video',
                elemMods: { visible: true },
                content: node._play
              },
              {
                elem: 'cover',
                content: [
                  {
                    elem: 'play-status',
                    elemMods: { status: status, isCinema: node._discuss_link }
                  }
                ]
              }
            ]
          },
          status === 'finish' &&
            (node._discuss_link || node._discuss_preview) && {
              elem: 'aside',
              content: [{ elem: 'discussion' }]
            }
        ]
      },
      {
        elem: 'section',
        elemMods: { view: 'info' },
        content: [
          {
            elem: 'listbox',
            content: {
              elem: 'list',
              elemMods: { delimiter: 'vertical' },
              content: [
                { elem: 'director' },
                { elem: 'countries' },
                { elem: 'year' }
              ]
            }
          },
          {
            elem: 'listbox',
            content: {
              elem: 'list',
              content: [
                { elem: 'tvpg' },
                { elem: 'duration' },
                { elem: 'language' },
                { elem: 'subs' }
              ]
            }
          },
          { elem: 'description' }
        ]
      }
    ];
  })
);
