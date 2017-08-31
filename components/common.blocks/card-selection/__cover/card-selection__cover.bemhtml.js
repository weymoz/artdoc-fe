block('card-selection').elem('cover')(
  match( node => !node._image ).def()( '' ),

  match( node => node._image && node._image.id ).replace()( ( node,ctx ) => {
    return {
      block: 'image',
      mix: { block: node.block, elem: node.elem },
      mods: {
        cover: 'width'
      },
      url: node._image.id,
      width: ctx.width,
      height: ctx.height
    }
  })

  // match( node => node._url )(
  //   replace()( ( node, ctx ) => {
  //     var onCover = applyCtx( {
  //       elem: 'on-cover',
  //       content: node.ctx.cover
  //     } );

  //     return {
  //       block: 'link',
  //       mix: { block: node.block, elem: node.elem },
  //       url: node._url,
  //       content: [
  //         {
  //           block: 'image',
  //           mods: {
  //             cover: 'width'
  //           },
  //           url: node._image.id,
  //           width: ctx.width,
  //           height: ctx.height
  //         },
  //         {
  //           html: onCover
  //         }
  //       ]
  //     }
  //   })
  // );
)
