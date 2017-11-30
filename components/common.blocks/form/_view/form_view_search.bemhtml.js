block('form').mod('view', 'search')(

  def()( () => {
    return applyNext( { ctx: {
      method: 'GET',
      action: '/search'
    } } );
  }),

  content()( () => {
    return [
      { elem: 'header' },
      { elem: 'content' },
      { elem: 'footer' }
    ]
  } ),

  elem('header')(
    addMix()( { block: 'page', elem: 'content', elemMods: { width: 'narrow' } } ),
    content()( ( node, ctx ) => {
      return {
        block: 'form-field',
        mods: { type: 'input' },
        mix: { block: 'page', elem: 'content' },
        name: 'q',
        content: {
          elem: 'control',
          content: {
            block: 'input',
            mods: {
              type: 'search',
              width: 'available',
              size: 'xxl',
            },
            val: ctx.query,
            placeholder: 'Фильм или тег'
          }
        }
      }
    } )
  ),

  elem('content')(
    addMix()( { block: 'page', elem: 'content', elemMods: { width: 'narrow' } } ),
    match( ( node, ctx ) => ctx.result && ctx.query ).content()( ( node, ctx ) => {
      return {
        block: 'search',
        mods: { view: 'form' },
        result: ctx.result,
        query: ctx.query
      }
    } )
  )
)