block('page')(
  def()( node => {
    return applyNext( { 'ctx.user': node.data.user } )
  } ),
  match( node => node.data && node.data.view ).content()( node => {
    return { block: node.data.view }
  } ),

  prependContent()( node => {
    return [
      { // Google Tag Manager
        tag: 'noscript',
        content: {
          html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKD3FG5" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
        }
      },
      {
        block: 'header',
        mods: { theme: 'artdoc' },
        mix: { block: node.block, elem: 'header' }
      }
    ]
  } ),
  appendContent()( node => {
    return {
      block: 'footer',
      mods: { theme: 'artdoc' },
      mix: { block: node.block, elem: 'footer' }
    }
  } )
)
