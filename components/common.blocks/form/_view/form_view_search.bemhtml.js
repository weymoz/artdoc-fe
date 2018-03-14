block('form').mod('view', 'search')(

  def()( (node, ctx) => {
    return applyNext( { ctx: {
      method: 'GET',
      action: '/' + ctx.lang + '/search',
      lang: ctx.lang
    } } );
  }),

  addJs()( ( node, ctx ) => {
    return {
      lang: ctx.lang
    }
  } ),

  content()( (node, ctx) => {
    return [
      { elem: 'header', lang: ctx.lang },
      { elem: 'content', lang: ctx.lang },
      { elem: 'footer', lang: ctx.lang }
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
            placeholder: ctx.lang === 'en' ? 'Movie or tag' : 'Фильм или тег'
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
        query: ctx.query,
        lang: ctx.lang
      }
    } )
  )
)
