block('card-movie').elem('image')(
  match( node => !node._cover || !node._cover.id )(
    addElemMods()( { 'no-image': true } )
  ),

  match( node => (node._cover && node._cover.id) || node._cover_id ).replace()( node => {

    return [
      {
        block: 'image',
        mods: { 'has-resize': true },
        mix: { block: node.block, elem: node.elem },
        attrs: {
          onError: 'this.classList.add( "' + node.block + '__' + node.elem + '_no-image" )',
          // Костыль для корректировки ресайза с Бэкенда
          // style: 'height: ' + node._cover.height + 'px'
        },
        url: node._cover.id || node._cover_id,
        width: node._cover.width,
        height: node._cover.height,
        title: node._name,
        alt: 'Кадр из фильма «' + node._name + '»'
      }
    ]
  })
)
