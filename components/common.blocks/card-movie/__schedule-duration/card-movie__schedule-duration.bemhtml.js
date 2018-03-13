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
          one:  node._lang === 'en' ? 'day' : 'день',
          two:  node._lang === 'en' ? 'days' : 'дня',
          five: node._lang === 'en' ? 'days' : 'дней'
        }
      }
    ];
  })
);
