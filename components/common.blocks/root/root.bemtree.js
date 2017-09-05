block('root').replace()(function() {
  var ctx = this.ctx,
      data = this.data = ctx.data,
      meta = data.meta || {},
      og = meta.og || {},
      bundle = data.bundle || 'desktop';

  if (ctx.context) return ctx.context;
  
  return {
    block: 'page',
    title: data.title || '#b_',
    favicon: '/favicon.ico',
    styles: [
      {
        elem: 'css',
        url: '/assets/css/' + bundle + '/' + data.page + '.min.css'
      }
    ],
    scripts: [
      {
        elem: 'js',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js'
      },
      {
        elem: 'js',
        url: '/assets/js/' + bundle + '/' + data.page + '.min.js'
      }
    ],
    head: [
      // { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=1024' } },
      { elem: 'meta', attrs: { name: 'description', content: meta.description } },
      { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title } },
      { elem: 'meta', attrs: { property: 'og:url', content: og.url } },
      { elem: 'meta', attrs: { property: 'og:image', content: og.image } },
      { elem: 'meta', attrs: { property: 'og:site_name', content: og.siteName } },
      { elem: 'meta', attrs: { property: 'og:locale', content: og.locale || 'ru_RU' } },
      { elem: 'meta', attrs: { property: 'og:type', content: 'website' } }
    ],
    mods: {
      view: data.view
    }
  };
});
