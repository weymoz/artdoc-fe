block( 'card-movie' ).elem( 'duration' )(
  match( node => !node._duration ).def()(''),

  tag()( ( node, ctx ) => ctx.tag || 'span' ),

  addAttrs()( { title: 'Длительность' } ),

  content()( node => {
    let min = node._lang === 'en' ? ' min.' : ' мин.'
    return [
      {
        block: 'icon',
        mods: {
          symbol: 'duration',
          size: 'm'
        }
      },
      {
        block: 'text',
        mods: {
          size: 's'
        },
        content: node._duration + min
      }
    ]
  })
)
