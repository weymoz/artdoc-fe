block('page-selection').replace()( node => {

  return [
    {
      elem: 'content',
      content: node.data.api.movies.map( item => {
        return {
          block: 'card-movie',
          mods: { view: 'list' },
          movie: item,
        }
      } )
    }
  ];
});