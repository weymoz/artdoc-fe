block('page-selection').replace()( node => {
  return [
    {
      block: 'card-selection',
      mods: { view: 'detail' },
      selection: node.data.api
    },
    {
      elem: 'content',
      content: node.data.api.movies.map( item => {
        return {
          block: 'card-movie',
          mods: { view: 'list' },
          movie: item,
        }
      } ),
    },
    { block: 'pagination', params: node.data.pagination },
    { block: 'club-footer' }
  ];
});