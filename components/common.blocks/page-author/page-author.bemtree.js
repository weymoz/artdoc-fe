var marked = require('marked');

block('page-author').replace()( node => {

  if ( node.data.api.description ) {
    node.data.api.description = marked( node.data.api.description );
  }

  return [
    {
      block: 'card-author',
      mods: { view: 'detail'},
      author: node.data.api
    },
    {
      elem: 'content',
      content: node.data.api.movies.map( item => {

        for (var i in item) {
          item['_'+i] = item[i];
        }

        return {
          block: 'card-movie',
          mods: { view: 'grid' },
          mix: { block: 'card-selection', elem: 'item' },
          movie: item,
        }
      } ),
    },
    { block: 'pagination', params: node.data.pagination },
    { block: 'club-footer' }
  ];
});
