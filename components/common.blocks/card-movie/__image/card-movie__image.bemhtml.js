block('card-movie').elem('image')(
  match( node => !node._cover || !node._cover.id )(
    def()( node => {
      console.log( node._cover );
      console.log('^^^^^^^^^^^');
      return applyNext();
    }),
    addElemMods()( { 'no-image': true } )
  ),

  match( node => node._cover && node._cover.id ).replace()( node => {
    return [
      {
        block: 'image',
        mix: { block: node.block, elem: node.elem },
        attrs: {
          onError: 'this.classList.add( "' + node.block + '__' + node.elem + '_no-image" )'
        },
        url: node._cover.id,
        width: node._cover.width,
        height: node._cover.height,
        title: node._name,
        alt: ''
      }
    ]
  })
)