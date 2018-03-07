block('footer').js()(true)

block('footer')(
  match( ( node, ctx ) => ctx.social ).elem( 'social' ).content()( ( node, ctx ) => {
    return Object.keys( ctx.social ).map( name => {
      return {
        block: 'button',
        mods: {
          type: 'link',
          view: 'plain',
          size: 'l'
        },
        mix: { block: node.block, elem: 'social-item' },
        attrs: { target: '_blank' },
        icon: {
          block: 'icon',
          mods: {
            social: name,
            size: 'l',
            bright: true
          }
        },
        url: ctx.social[ name ]
      }
    } );
  } )
)
