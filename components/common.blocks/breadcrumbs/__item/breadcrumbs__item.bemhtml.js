block('breadcrumbs').elem('item')(
  match( ( node, ctx ) => ctx.url ).def()( ( node, ctx ) => {
    return applyCtx({
      block: 'link',
      mix: [ { block: node.block, elem: node.elem }, ctx.mix ],
      mods: ctx.mods,
      url: ctx.url,
      content: ctx.content
    });
  }),
  tag()('span')
)
