var marked = require('marked');

block('page-author').replace()( node => {

  if ( node.data.api.description ) {
    node.data.api.description = marked( node.data.api.description );
  }

  return [
    {
      block: 'card-author',
      mods: { view: 'detail'},
      author: node.data.api,
      lang: node.data.lang
    },
    {
      elem: 'content',
      elemMods: {
        underline: true
      },
      content: {
          block: 'heading',
          mods: {
            size: 'xl',
            underline: true
          },
          content: [
          node.i18n('author', 'title'),
          {
            elem: 'counter',
            content: node.data.api.movies.length
          }
          ]
        }
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
          lang: node.data.lang
        }

      } )
    },
    { block: 'pagination', params: node.data.pagination },
    { block: 'club-footer' }
  ];
});


  // elem('header').match( node => node._api )(
  //   addMix()( { block: 'page', elem: 'content' } ),
  //   content()([
  //     { elem: 'title' },
  //     { elem: 'actions' }
  //   ])
  // ),

  // elem('title')(
  //   addMix()({ block: 'heading', mods: { size: 'xl' } }),
  //   content()( node => [
  //     node._api.title,
  //     { elem: 'result-count' },
  //   ] )
  // ),
