block('page')(
  def()( node => {
    return applyNext( { 'ctx.user': node.data.user } )
  } ),
  match( node => node.data && node.data.view ).content()( node => {
    return { block: node.data.view }
  } ),

  prependContent()( node => {

    let originalUrl = node.data.origUrl;
    let parsedUrl = originalUrl.split('/');
    let lang = parsedUrl[1];
    var regV = new RegExp(lang);
    let newRoute;
    if(lang === 'en'){
      newRoute = originalUrl.replace(regV,'ru');
    } else {
      newRoute = originalUrl.replace(regV,'en');
    }



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
        mix: { block: node.block, elem: 'header' },
        lang: node.data.lang,
        link: newRoute
      }
    ]
  } ),
  appendContent()( node => {
    return {
      block: 'footer',
      mods: { theme: 'artdoc' },
      mix: { block: node.block, elem: 'footer' },
      lang: node.data.lang
    }
  } )
)
