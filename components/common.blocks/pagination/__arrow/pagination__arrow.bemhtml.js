block('pagination').elem('arrow').replace()(function(node, ctx) {
  console.log('arrow!');
  console.log(ctx);
  ctx = {
    block: 'link',
    mix: [
      {block: 'arrow', mods: { disabled: !ctx.active } },
      {block: 'arrow', elem: ctx.direction },
      {block: 'pagination', elem: 'pagelink'}
      ],
    url: ctx.active ? ctx.url : null,
    content: { html: '&nbsp' },
    mods: { disabled: !ctx.active }
  };
  return ctx;
});
