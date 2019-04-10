block('card-movie')(
  match((node, ctx) => !ctx.movie).def()(''),

  match((node, ctx) => ctx.movie).def()((node, ctx) => {

    Object.keys(ctx.movie).map(key => {
      node['_' + key] = ctx.movie[key];
      return true;
    });

    if (ctx.lang) {
      node['_lang'] = ctx.lang;
    }

    if (ctx.currency) {
      node['_currency'] = ctx.currency;
    }

    // 16:9 ratio for all covers
    if (node._cover && node._cover.width) {
      node._cover.height = Math.round(node._cover.width / (16 / 9));
    }

    return applyNext();
  }),

  tag()('article'),

  elem('*')(
    match(node => node.elemMods.type === 'link' && node._url)(
      tag()('a'),
      addMix()(() => {
        return { block: 'link' };
      }),
      addAttrs()(node => {
        // remove url for nested elements
        let url = node._url;
        // delete node._url;

        return {
          href: url
        };
      })
    )
  )
);
