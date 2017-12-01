block('card-ticket').elem('left')(

  addMix()( { block: 'font', mods: { family: 'pt-mono', loaded: true } } ),  

  match( node => node._tickets_left < 10 ).content()( node => {
    return [
      {
        block: 'text',
        mods: { plural: true },
        content: {
          number: node._tickets_left,
          one: 'Остался',
          two: 'Осталось',
          five: 'Осталось'
        }
      },
      ' ',
      node._tickets_left,
      ' ',
      {
        block: 'text',
        mods: { plural: true },
        content: {
          number: node._tickets_left,
          one: 'билет',
          two: 'билета',
          five: 'билетов'
        }
      }
    ]
  }),

  match( node => !node._tickets_left )(
    content()(function() {
      return 'Билетов больше нет…'
    })
  )
  
);
