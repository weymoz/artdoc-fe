var marked = require('marked');

block('page-selection').replace()( node => {

  if ( node.data.api.description ) {
    node.data.api.description = marked( node.data.api.description );
  }
  return [
    {
      block: 'card-selection',
      mods: { view: 'detail' },
      selection: node.data.api,
      lang: node.data.lang
    },
    {
      elem: 'content',
      content: node.data.api.movies.map( item => {
        return {
          block: 'card-movie',
          mods: { view: 'grid' },
          mix: { block: 'card-selection', elem: 'item' },
          movie: item,
          lang: node.data.lang
        }
      } ),
    },
    { block: 'pagination', params: node.data.pagination },
    { block: 'club-footer' }
  ];
});
