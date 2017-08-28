block('card-movie').elem('image')(
  match( node => !node._cover ).def()(''),

  match( node => node._cover ).replace()( node => {
    return [
      {
        block: 'image',
        mix: { block: node.block, elem: node.elem },
        url: node._cover.id,
        width: node._cover.width,
        height: node._cover.height
      }
    ]
  })
)