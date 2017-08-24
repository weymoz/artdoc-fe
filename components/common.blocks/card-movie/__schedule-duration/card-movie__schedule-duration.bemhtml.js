block('card-movie').elem('schedule-duration')(
  match( node => { return !node._schedule || node._schedule.length < 2} ).def()(''),

  content()( node => {
    return [
      node._schedule.length,
      ' ',
      {
        block: 'text',
        mods: { plural: true },
        content: {
          number: node._schedule.length,
          one: 'день',
          two: 'дня',
          five: 'дней'
        }
      }
    ];
  })
);
