block('card-ticket').elem('left')(

  addMix()( { block: 'font', mods: { family: 'pt-mono', loaded: true } } ),

  match( node => (node._tickets_left < 100) && (node.mods.status === 'active')  ).content()( node => {

    let ticket  = node._lang === 'en' ? 'ticket'  : 'билет';
    let ticket2 = node._lang === 'en' ? 'tickets' : 'билетa';
    let ticket5 = node._lang === 'en' ? 'tickets' : 'билетов';

    let left  = node._lang === 'en' ? 'left'  : 'Остался';
    let left2 = node._lang === 'en' ? 'left' : 'Осталось';
    let left5 = node._lang === 'en' ? 'left' : 'Осталось';

    return [
      {
        block: 'text',
        mods: { plural: true },
        content: {
          number: node._tickets_left,
          one:  left,
          two:  left2,
          five: left5
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
          one: ticket,
          two: ticket2,
          five: ticket5
        }
      }
    ]
  }),

  match( node => !node._tickets_left )(
    content()(function(node) {

      let notickets = node._lang === 'en' ? 'All tickets have been sold out' : 'Билетов больше нет…'

      return notickets
    })
  )

);
