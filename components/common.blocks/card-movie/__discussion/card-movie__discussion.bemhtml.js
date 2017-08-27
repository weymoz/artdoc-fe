block('card-movie').elem('discussion')(

  match( node => node._discuss_preview || node._discuss_link ).replace()( ( node, ctx ) => {
    return [
      {
        block: 'link',
        mix: { block: node.block, elem: node.elem },
        url: node._discuss_link,
        attrs: {
          title: node._discuss_preview
        },
        content: node._discuss_preview
      }
    ]
  })

)
