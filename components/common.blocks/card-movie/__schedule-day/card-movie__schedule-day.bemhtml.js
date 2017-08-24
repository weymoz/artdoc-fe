block('card-movie').elem('schedule-day').content()( ( node, ctx ) => {
  return applyCtx({
    block: 'text',
    mods: {
      format: 'datetime'
    },
    format: 'DD',
    content: ctx.content
  });
});
