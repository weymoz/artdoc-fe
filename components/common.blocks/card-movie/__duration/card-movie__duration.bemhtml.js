block( 'card-movie' ).elem( 'duration' )(
  match( node => !node._duration ).def()(''),

  tag()( ( node, ctx ) => ctx.tag || 'span' ),

  addAttrs()( { title: 'Длительность' } ),

  content()( node => {
    return [
      {
        block: 'icon',
        mods: {
          symbol: 'timer',
          size: 's'
        },
        url: 'https://png.icons8.com/time-span/p1em/16'
      },
      {
        block: 'text',
        mods: {
          size: 's'
        },
        content: node._duration + ' мин.'
      }
    ]
  })
)
