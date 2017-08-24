block('page')(

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