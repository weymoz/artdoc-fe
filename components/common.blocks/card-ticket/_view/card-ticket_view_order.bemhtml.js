block('card-ticket').mod('view', 'order').content()( ( node, ctx ) => {
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
                  content: ctx.ticket.time_gmt3
                },
                {
                  block: 'text',
                  mods: {
                    format: 'datetime',
                  },
                  format: 'HH:mm[ (время UTC]',
                  content: ctx.ticket.time_gmt3 + 60 * 60 * 3
                },
                ctx.ticket.tz,
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
              session: ctx.ticket.id
            }
          ]
        }
      ]
    }
  ]
});
