var marked = require('marked');

block('page-search').replace()( node => {

  delete node.data.api.items.author;
  const result = node.data.api.items || {};
  if ( result.movie && result.movie.length ) {
    result.movie.forEach( movie => {
      if ( movie.offlineShow && movie.offlineShow.description ) {
        movie.offlineShow.description = marked( movie.offlineShow.description );
      }
    } )
  }

  return [
    {
      elem: 'content',
      elemMods: { gap: 'bottom' },
      content: [
        {
          block: 'search',
          mods: { view: 'page' },
          result: result,
          query: node.data.search,
          lang: node.data.lang,
          currency: node.data.currency
        }
      ]
    },
    { block: 'club-footer' }
  ];
});
