block('logo')(
  def()(function() {
    return applyCtx({
      block: 'link',
      mix: [ this.ctx, this.ctx.mix ],
      url: '/'
    });
  })
);
