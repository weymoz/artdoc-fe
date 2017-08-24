block('modal').mod('view', 'payment').content()(function() {
  return {
    tag: 'pre',
    content: JSON.serialize( this.ctx.api, null, 2 )
  }
});
