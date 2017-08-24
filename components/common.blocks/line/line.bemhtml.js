block('line')(
  tag()( function() {
    return this.ctx.content ? 'div' : 'hr';
  } ),
  content()( function() {
    return [
      this.ctx.content ? {
        elem: 'content',
        tag: 'span',
        content: this.ctx.content
      } : ''
    ];
  })
)