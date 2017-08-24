block('card-selection').elem('cover')(
  match( node => !node.image ).def()( '' ),

  replace()( node => {
    return {
      block: 'image',
      mix: { block: node.block, elem: node.elem },
      mods: {
        cover: true
      },
      url: node._image
    }
  }),

  match( node => node._url )(
    replace()( node => {
      var onCover = applyCtx( {
        elem: 'on-cover',
        content: node.ctx.cover
      } );
      return {
        block: 'link',
        mix: { block: node.block, elem: node.elem },
        url: node._url,
        content: [
          {
            block: 'image',
            mods: {
              cover: true
            },
            url: node._image
          },
          {
            html: onCover
          }
        ]
      }
    })
  )
);
