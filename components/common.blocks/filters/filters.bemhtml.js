block('filters')(

  match( ( node, ctx ) => !ctx.data ).def()(''),

  def()( ( node, ctx ) => {
    node._api = Object.assign( {}, ctx.data );
    return applyNext();
  } ),  

  js()( true ),

  addMods()( node => { return { result: node._api.pagination.view || 'list' } } ),

  content()( () => {
    return [
      { elem: 'header'  }, // header with actions
      { elem: 'form'    }, // filter's form
      { elem: 'params'  }, // sorting and view params
      { elem: 'content' }, // search result
      { elem: 'footer'  }  // pagination
    ]
  }
  ),

  elem('header').match( node => node._api )(
    addMix()( { block: 'page', elem: 'content' } ),
    content()([
      { elem: 'title' },
      { elem: 'actions' }
    ])
  ),

  elem('title')(
    addMix()({ block: 'heading', mods: { size: 'xl' } }),
    content()( node => [
      node._api.title,
      { elem: 'result-count' },
    ] )
  ),

  elem('result-count')(
    content()( node => node._api.pagination.total_count )
  ),

  elem('actions')(
    content()([
      { elem: 'count' },
      { elem: 'clear' },
      { elem: 'toggle' }
    ])
  ),

  elem('toggle').replace()( node => {
    return {
      block: 'button',
      mods: {
        togglable: 'check',
        size: 'l',
        theme: 'artdoc-dark'
      },
      mix: { block: node.block, elem: node.elem },
      text: 'Фильтры'
    }
  }),

  elem('form').match( node => node._api.filters )(
    replace()( node => {
      return {
        block: 'page',
        elem: 'section',
        mix: { block: node.block, elem: node.elem },
        content: {
          elem: 'content',
          content: [
            { block: node.block, elem: 'close' },
            {
              block: 'form',
              mods: { view: node.block },
              content: node._api.fields
            }
          ]
        }
      }
    })
  ),

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
        mods: {
          type: 'line'
        },
        mix: { block: node.block, elem: node.elem },
        val: 'rating',
        name: 'sortingBy',
        options: [
          {
            val: 'rating',
            text: 'с высоким рейтингом'
          },
          {
            val: 'recently',
            text: 'сначала новые'
          },
          {
            val: 'latest',
            text: 'сначала старые'
          },
        ]
      }
    } )
  ),

  elem('view')(
    replace()( () => {
      return {
        block: 'radio-group',
        mods: {
          type: 'button'
        },
        val: 'rows',
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
            val: 'rows',
            text: {
              block: 'icon',
              mods: {
                symbol: 'timer',
                size: 's'
              },
              url: 'https://png.icons8.com/grid-3-filled/ios7/25'
            }
          },
        ]
      }
    })
  ),

  elem('content').match( node => node._api.api )(
    addMix()( { block: 'page', elem: 'content' } ),

    content()( node => {
      return node._api.api.map( movie => {
        return {
          block: 'card-movie',
          mods: {
            view: node._api.pagination.view || 'list'
          },
          mix: { block: 'filters', elem: 'result-item' },
          movie: movie
        }
      } )
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
  )

);
