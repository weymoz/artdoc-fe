block( 'card-movie' ).elem( 'subs' )(
  match( node => !node._subs || !node._subs.length ).def()(''),
  tag()( ( node, ctx ) => ctx.tag || 'span' ),
  addAttrs()( { title: 'Субтитры' } ),
  content()( node => {
    return [
      {
        block: 'icon',
        mods: {
          symbol: 'subs',
          size: 's'
        },
        url: 'https://png.icons8.com/subtitles/win10/16'
      },
      {
        block: 'text',
        mods: {
          size: 's'
        },
        content: node._subs.map( sub => sub.name && sub.name.toLowerCase() ).join( ', ' )
      }
    ]
  })
)
