block('page-search').replace()( node => {

  delete node.data.api.items.author;
  const result = node.data.api.items || {},
        total = Object.keys( result ).reduce( ( sum, current ) => sum + result[ current ].length, 0 );

  return [
    {
      elem: 'content',
      content: [
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: total ? 'Результаты поиска' : 'По вашему запросу ничего не найдено'
        },
        result.movie && result.movie.length
          ? [
              {
                elem: 'title',
                elemMods: { view: 'condensed-bold', size: 'm' },
                mix: { block: 'heading', mods: { caps: true, size: 'xs' } },
                content: 'Фильмы ' + result.movie.length
              },
              result.movie.map( movie => {
                return {
                  block: 'card-movie',
                  mods: { view: 'list' },
                  movie: movie
                }
              } )
            ]
          : '',
        result.author && result.author.length
          ? [
              {
                elem: 'title',
                elemMods: { view: 'condensed-bold', size: 'm' },
                mix: { block: 'heading', mods: { caps: true, size: 'xs' } },
                content: 'Авторы ' + result.author.length
              },
              result.author.map( author => {
                return {
                  block: 'card-author',
                  mods: { size: 'l' },
                  author: author
                }
              } )
            ]
          : '',
        result.tags && result.tags.length
          ? [
              {
                elem: 'title',
                elemMods: { view: 'condensed-bold', size: 'm' },
                mix: { block: 'heading', mods: { caps: true, size: 'xs' } },
                content: 'Теги ' + result.tags.length
              },
              result.tags.map( tag => {
                return {
                  block: 'link',
                  mods: {
                    view: 'tag',
                    size: 's',
                    theme: 'artdoc-dark'
                  },
                  url: '/movie/tag-' + tag.value,
                  content: tag.value
                }
              } )
            ]
          : ''
      ]
    },
    { block: 'club-footer' }
  ];
});
