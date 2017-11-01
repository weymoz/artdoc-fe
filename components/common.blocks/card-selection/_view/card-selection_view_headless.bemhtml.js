block('card-selection').mod('view', 'headless')(

  elem('params')(
    addMix()( { block: 'page', elem: 'content' } ),
    content()([
      { elem: 'sort' },
      { elem: 'view' }
    ])
  ),

  elem('sort')(
    replace()( node => {
      return {
        block: 'radio-group',
        mods: { type: 'line' },
        mix: { block: node.block, elem: node.elem },
        val: node._api.pagination.sort || '-rating',
        name: 'sort',
        options: [
          {
            val: '-rating',
            text: 'с высоким рейтингом'
          },
          {
            val: '-year',
            text: 'сначала новые'
          },
          {
            val: 'year',
            text: 'сначала старые'
          },
        ]
      }
    } )
  ),

  elem('view')(
    replace()( node => {
      return {
        block: 'radio-group',
        mods: {
          type: 'button',
          theme: 'artdoc-dark'
        },
        mix: { block: node.block, elem: node.elem },
        val: node._api.pagination.view || 'grid',
        name: 'view',
        options: [
          {
            val: 'grid',
            text: {
              block: 'icon',
              mods: {
                symbol: 'timer',
                size: 's'
              },
              url: 'https://png.icons8.com/grid-2-filled/ios7/25'
            }
          },
          {
            val: 'list',
            text: {
              block: 'icon',
              mods: {
                symbol: 'timer',
                size: 's'
              },
              url: 'https://png.icons8.com/grid-3-filled/ios7/25'
            }
          }
        ]
      }
    })
  ),

  elem('footer').match( node => node._api.pagination )(
    content()( node => {
      return {
        block: 'pagination',
        mix: { block: 'page', elem: 'content' },
        params: node._api.pagination
      }
    })
  ),

  // ctx.selection.movies.elem('content')(
  //   ctx.selection.movies.map( movie => {

  //   } )
  // ),

  content()( () => {
    return [
      { elem: 'params'  }, // sorting and view params
      { elem: 'content' }, // search result
      { elem: 'footer'  }  // pagination
    ]
  } )
)
