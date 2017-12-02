block('card-selection').elem('cover')(
  match( (node, ctx) => node._image && node._image.id && ctx.width && ctx.height ).replace()( ( node,ctx ) => {
    return {
      block: 'image',
      mods: {
        cover: 'width',
        'has-resize': true
      },
      mix: { block: node.block, elem: node.elem },
      url: node._image.id,
      width: ctx.width,
      height: ctx.height,
      content: ctx.content && {
        html: applyCtx( ctx.content )
      }
    }
  })
)
