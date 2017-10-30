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
        total && {
          block: 'search',
          mods: { view: 'page' },
          result: result
        }
      ]
    },
    { block: 'club-footer' }
  ];
});
