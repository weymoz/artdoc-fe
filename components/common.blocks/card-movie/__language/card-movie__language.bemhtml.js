block( 'card-movie' ).elem( 'language' )(
  match( node => !node._language || !node._language.length ).def()( '' ),
  tag()( ( node, ctx ) => ctx.tag || 'span' ),
  addAttrs()( { title: 'Перевод' } ),
  content()( node => {
    return [
      {
        block: 'icon',
        mods: {
          symbol: 'lang',
          size: 'm'
        }
      },
      {
        block: 'text',
        mods: {
          size: 's'
        },
        content: node._language.map( lang => lang.name && lang.name.toLowerCase() ).join( ', ' )
      }
    ]
  })
)
