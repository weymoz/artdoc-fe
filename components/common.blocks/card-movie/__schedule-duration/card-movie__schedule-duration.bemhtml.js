block('card-movie').elem('schedule-duration')(
  match( node => { return !node._schedules || node._schedules.length < 2} ).def()(''),

  content()( node => {
    return [
      node._schedules.length,
      ' ',
      {
        block: 'text',
        mods: { plural: true },
        content: {
          number: node._schedules.length,
          one: 'день',
          two: 'дня',
          five: 'дней'
        }
      }
    ];
  })
);
