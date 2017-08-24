block('card-ticket').elem('left')(
  addMix()( { block: 'font', mods: { family: 'pt-mono', loaded: true } } ),  
  content()(function() {
    return [
      {
        block: 'text',
        mods: { plural: true },
        content: {
          number: this.ctx.content,
          one: 'Остался',
          two: 'Осталось',
          five: 'Осталось'
        }
      },
      ' ',
      this.ctx.content,
      ' ',
      {
        block: 'text',
        mods: { plural: true },
        content: {
          number: this.ctx.content,
          one: 'билет',
          two: 'билета',
          five: 'билетов'
        }
      }
    ]
  }),

  match(function(){ return !this.ctx.content })(
    content()(function() {
      return 'Нэт билэт ¯\\_(ツ)_/¯'
    })
  )
  
);
