block('card-ticket').mod('view', 'order').content()( node => {

  let tzMinutes = node._tz % 60;
  let tzHours = ( node._tz - tzMinutes ) / 60;

  tzMinutes = tzMinutes < 10 ? '0' + tzMinutes : tzMinutes;

  if ( tzHours < 0 ) {
    tzHours = tzHours > -10 ? '-0' + tzHours * -1 : tzHours;
  } else {
    tzHours = tzHours < 10 ? '0' + tzHours : tzHours;
  }

  let timezone = tzHours + ':' + tzMinutes;

  return [
    {
      elem: 'header',
      content: { elem: 'left' }
    },
    {
      elem: 'section',
      content: [
        {
          elem: 'content',
          content: [
            { elem: 'user-date' },
            { elem: 'room' },
            { elem: 'city' },
            { elem: 'user-time' },
            { elem: 'buy' },
            'Оплата картой'
          ]
        },
        {
          elem: 'aside',
          content: [
            {
              block: 'paragraph',
              content: [
                'Мы отправим на вашу электронную почту ссылку на страницу сеанса после оплаты. Фильм будет доступен к просмотру ',
                {
                  block: 'text',
                  mods: {
                    format: 'datetime',
                  },
                  format: 'DD[&nbsp;]MMMM[ с ]HH:mm[ до ]',
                  content: node._time_gmt3
                },
                {
                  block: 'text',
                  mods: {
                    format: 'datetime',
                  },
                  format: 'HH:mm[ (время&nbsp;UTC]',
                  content: node._time_gmt3 + 60 * 60 * 3
                },
                timezone,
                ').'
              ]
            },
            {
              tag: 'br'
            },
            {
              block: 'form',
              mods: {
                view: 'order'
              },
              session: node._id
            }
          ]
        }
      ]
    }
  ]
});
