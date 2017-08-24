block('calendar').mod('view', 'ticket-case')(
  match( ( node, ctx ) => ctx.date ).content()( ( node, ctx ) => {
    const date = ctx.date,
          currentDay = new Date( date * 1000 ).getDate(),
          currentWeekDay = new Date( date * 1000 ).getDay(),
          today = new Date().getDate(),
          weekDay = [ 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ' ];

    return [
      {
        elem: 'date',
        content: { block: 'text', mods: { format: 'datetime' }, format: 'DD', content: date },
      },
      {
        elem: 'content',
        content: [
          {
            elem: 'month',
            content: { block: 'text', mods: { format: 'datetime' }, format: 'genitive#MMMM', content: date },
          },
          {
            elem: 'week-day',
            content: ( currentDay === today ? 'Сегодня' : weekDay[ currentWeekDay ] )
          }
        ]
      }
    ]
  })
)