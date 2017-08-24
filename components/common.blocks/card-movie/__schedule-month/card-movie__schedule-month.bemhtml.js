block('card-movie').elem('schedule-month').content()( ( node, ctx ) => {

  return applyCtx({
    block: 'text',
    mods: {
      format: 'datetime'
    },
    format: 'genitive#MMMM',
    content: ctx.content
  });
});
