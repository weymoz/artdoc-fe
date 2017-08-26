block('card-selection').elem('content')(

  match( (node, ctx) => ctx.url )(
    tag()('a'),
    addAttrs()( (node, ctx) => {
      let url = node._url;
      delete node._url;

      return {
        href: url
      }
    } ),
    addMix()( { block: 'link' } )
  )
)
