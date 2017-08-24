block('card-ticket').elem('user-time').content()(function() {
  return {
    block: 'text',
    mix: { block: this.block, elem: this.elem },
    mods: {
      format: 'datetime'
    },
    format: 'HH:mm',
    content: this.ctx.content
  }
});
