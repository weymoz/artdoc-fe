block('page')(

  //addMix()({ block: 'font', mods: { family: 'helvetica-neue', loaded: true } }),

  content()( node => {
    return [
      {
        block: 'header',
        mix: { block: node.block, elem: 'header' }
      },
      {
        block: node.data.view
      },
      {
        block: 'footer',
        mix: { block: node.block, elem: 'footer' }
      }
    ];
  } )

)
