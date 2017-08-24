block('card-movie').elem('cover')(

  match( node => !node._cover ).def()(''),

  replace()( ( node, ctx ) => {
    return [
      {
        block: 'image',
        mix: { block: node.block, elem: node.elem },
        mods: {
          cover: true
        },
        url: node._cover
      },
      ctx.cover && {
        block: node.block,
        elem: 'on-cover',
        content: ctx.cover
      }
    ]
  }),

  match( node => node._url )(
    replace()( ( node, ctx ) => {
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
            url: node._cover
          },
          ctx.cover && {
            block: node.block,
            elem: 'on-cover',
            content: ctx.cover
          }
        ]
      }
    })
  ),

  def()( (node) => {
    return applyNext( { _cover: node._cover ? '//dev.artdoc.media' + node._cover.path : 'http://via.placeholder.com/840x472' } );
  })
);
