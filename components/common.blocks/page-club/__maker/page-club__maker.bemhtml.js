block('page-club').elem('maker').content()(function() {
    return [
      {
        block: 'image',
        url: this.ctx.image
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
