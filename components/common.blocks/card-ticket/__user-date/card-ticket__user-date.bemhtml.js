block('card-ticket').elem('user-date')(

  addMix()( { block: 'font', mods: { family: 'pt-mono', loaded: true } } ),

  content()(function() {
    return [
      {
        block: 'text',
        mods: {
          format: 'datetime'
        },
        format: 'DD MMMM',
        content: this.ctx.content
      },
      ( new Date( this.ctx.content * 1000 ).getDate() === new Date().getDate() + 1 ? ', завтра' : '' )
    ]
  })
)
