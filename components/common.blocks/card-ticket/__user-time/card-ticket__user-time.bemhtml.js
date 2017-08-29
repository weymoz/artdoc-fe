block('card-ticket').elem('user-time').content()( node => {
  return {
    block: 'text',
    mix: { block: this.block, elem: this.elem },
    mods: {
      format: 'datetime'
    },
    format: 'HH:mm',
    content: node._time_gmt3
  }
});
