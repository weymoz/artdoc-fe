block('page-club').elem('maker').content()(function() {
    return [
      {
        elem: 'image',
        mix: { block: 'page-club', elem: this.ctx.counter }
      },
      {
        block: 'description',
        mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
        content: [
          {
            elem: 'name',
            content: this.ctx.name
          },
          {
            elem: 'role',
            content: this.ctx.role
          }
        ]
      }
    ]
});
