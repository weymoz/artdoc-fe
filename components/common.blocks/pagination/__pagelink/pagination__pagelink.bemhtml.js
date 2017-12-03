block('pagination').elem('pagelink').replace()(function(node, ctx) {
  ctx = {

    block: 'link',
    mix: {
      block: 'pagination',
      elem: 'pagelink',
      elemMods: {
        state: ctx.selected ? 'selected' : ''
      },
    },
    content: ctx.content,
    url: ctx.url,
    mods: { disabled: !ctx.active }

  };
  return ctx;
});
