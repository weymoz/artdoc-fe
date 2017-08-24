block( 'card-movie' ).elem( 'language' )(
  match( node => !node._language || !node._language.length ).def()( '' ),
  tag()( ( node, ctx ) => ctx.tag || 'span' ),
  addAttrs()( { title: 'Перевод' } ),
  content()( node => {
    return [
      {
        block: 'icon',
        mods: {
          symbol: 'volume',
          size: 's'
        },
        url: 'https://png.icons8.com/speaker/p1em/16'
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
