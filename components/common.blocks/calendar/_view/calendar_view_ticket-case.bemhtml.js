block('calendar').mod('view', 'ticket-case')(
  match( ( node, ctx ) => ctx.date ).replace()( ( node, ctx ) => {
    const date = ctx.date,
          currentDay = new Date( date * 1000 ).getDate(),
          today = new Date().getDate();

    const _discuss = ctx.discuss

    const template = node.reapply({
      block: node.block,
      mods: node.mods,
      content: [
        {
          elem: 'date',
          content: ']DD['
        },
        {
          elem: 'content',
          content: [
            {
              elem: 'month',
              content: ']MMMM['
            },
            {
              elem: 'week-day',
              content: ( currentDay === today ? 'Сегодня' : ']dd[' )
            },
            _discuss && {
              elem: 'discuss',
              mix: {block: 'card-movie', elem: 'discussion'},
              content: {
                elem: 'tooltip',
                mix: { block: 'card-movie', elem: 'tooltip', elemMods: { promo: true } },
                content: _discuss
              }
            }
          ]
        },
      ]
    });

    return [
      {
        block: 'text',
        mods: { format: 'datetime' },
        format: '[' + template + ']',
        content: date
      }
    ]
  })
)
