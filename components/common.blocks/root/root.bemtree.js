block('root').replace()(function() {
  const ctx = this.ctx,
        data = this.data = ctx.data,
        meta = data.meta || {},
        og = meta.og || {},
        bundle = data.bundle || 'desktop',
        lang = data.lang || 'ru'


  if (ctx.context) return ctx.context;

  return {
    block: 'page',
    title: data.title || data.view || "Artdoc.Media" || data.page,
    favicon: '/favicon.ico',
    styles: [
      {
        elem: 'css',
        url: '/assets/css/' + bundle + '/' + bundle + '.min.css'
      }
    ],
    scripts: [
      {
        elem: 'js',
        content: '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-MKD3FG5\');'
      },
      {
        elem: 'js',
        url: '/assets/js/' + bundle + '/' + bundle + '.' + lang + '.min.js'
      },
      {
        elem: 'js',
        url: '/assets/js/index.react.js'
      },
    ],
    head: [

      data.adaptive
      ?  { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } }
      :  { elem: 'meta', attrs: { name: 'viewport', content: 'width=1024' } },

      // favicons
      {
        html: `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
          <link rel="manifest" href="/manifest.json">
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3203c">
          <meta name="apple-mobile-web-app-title" content="Artdoc.media">
          <meta name="application-name" content="Artdoc.media">
          <meta name="theme-color" content="#f3203c">`
      },

      // meta
      { elem: 'meta', attrs: { name: 'description', content: meta.description } },
      { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title } },
      { elem: 'meta', attrs: { property: 'og:url', content: og.url } },
      { elem: 'meta', attrs: { property: 'og:image', content: og.image } },
      { elem: 'meta', attrs: { property: 'og:site_name', content: og.siteName } },
      { elem: 'meta', attrs: { property: 'og:locale', content: og.locale || 'ru_RU' } },
      { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },
      {
        elem: 'js',
        url: '//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js',
        attrs: { 'data-apikey': '4425b1e5b84ec31329ba166f4b25ee85' }
      }
    ],
    mods: {
      view: data.view,
      adaptive: data.adaptive
    }
  };
});

