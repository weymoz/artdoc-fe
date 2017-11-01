block('page-search').replace()( node => {

  delete node.data.api.items.author;
  const result = node.data.api.items || {};

  return [
    {
      elem: 'content',
      content: [
        {
          block: 'search',
          mods: { view: 'page' },
          result: result,
          query: node.data.search
        }
      ]
    },
    { block: 'club-footer' }
  ];
});
