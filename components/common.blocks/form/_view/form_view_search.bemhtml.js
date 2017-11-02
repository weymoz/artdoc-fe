block('form').mod('view', 'search')(

  def()( () => {
    return applyNext( { ctx: {
      method: 'GET',
      action: '/search'      
    } } );
  }),

  elem('header')(
    addMix()( { block: 'page', elem: 'content', elemMods: { width: 'narrow' } } ),
    content()({
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
            width: 'available'
          },
          placeholder: 'Поиск'
        }
      }
    })
  ),

  elem('content')(
    addMix()( { block: 'page', elem: 'content', elemMods: { width: 'narrow' } } )
  ),

  elem('footer')(
    match( ( node, ctx ) => !ctx.query ).def()(''),
    addMix()( { block: 'page', elem: 'content', elemMods: { width: 'narrow' } } ),
    content()( ( node, ctx ) => {
      return {
        block: 'paragraph',
        mods: { align: 'right' },
        content: {
          block: 'link',
          mods: { view: 'text' },
          url: '/search?q=' + ctx.query,
          content: 'Показать все результаты >'
        }
      }
    }),
    match( ( node, ctx ) => !ctx.result ).content()( ( node, ctx ) => {
      return {
        block: 'paragraph',
        mods: { align: 'center' },
        content: [
          'К сожалению, мы ничего не нашли по запросу «' + ctx.query + '».',
          { tag: 'br' },
          'Попробуйте еще раз или загляните в каталог фильмов.'
        ]
      }
    })
  ),

  content()( () => {
    return [
      { elem: 'header' },
      { elem: 'content' },
      { elem: 'footer' }
    ]
  } )

)