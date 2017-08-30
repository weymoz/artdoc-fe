block('club-footer').elem('maker').content()(function() {
    return [
      {
        elem: 'image',
        mix: { block: 'club-footer', elem: this.ctx.counter }
      }
    ]
});
