block('header')(
  tag()('header'),
  match( ( node, ctx ) => ctx.social ).elem('social').content()( ( node, ctx ) => {


    return Object.keys( ctx.social ).map( name => {
      return {
        block: 'button',
        mods: {
          type: 'link',
          view: 'plain',
          size: 'xxl'
        },
        attrs: { target: '_blank' },
        icon: {
          block: 'icon',
          mods: {
            social: name,
            size: 'xl'
          }
        },
        url: ctx.social[ name ]
      }
    } )
  } )
)
