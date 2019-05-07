block('card-movie').elem('director')(
  match(node => {
    return !node._director;
  }).def()(''),
  tag()((node, ctx) => ctx.tag || 'span'),
  addAttrs()({ title: 'Режиссёр' }),
  match(node => node.ctx.movie && node.ctx.movie.authors).content()(node => {

    return node.ctx.movie.authors.map(author => {
      return {
        block: 'card-author',
        mods: { size: 'xs', 'hide-image': true, 'no-offsets': true },
        author: author
      };
    });
  })
);
