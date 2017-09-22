block('page')(
  content()( node => {
    return [
      {
        tag: 'noscript', // Google Tag Manager
        content: {
          html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKD3FG5" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
        }
      },
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
