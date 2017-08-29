block('page-index').elem('maker').content()(function() {
    return [
      {
        elem: 'image',
        mix: { block: 'page-index', elem: this.ctx.counter }
      }
    ]
});
