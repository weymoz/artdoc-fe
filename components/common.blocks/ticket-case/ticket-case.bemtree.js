block('ticket-case').content()(function() {

  const _schedules = this.ctx.movie.schedules.sort(function(a,b) {return (a.date_gmt3 > b.date_gmt3) ? 1 : ((b.date_gmt3 > a.date_gmt3) ? -1 : 0);} ),
        _code = this.ctx.movie.code;

  let _sessions = {};

  for ( let item of this.ctx.movie.sessions ) {
    _sessions[ item.session.schedule_id ] = _sessions[ item.session.schedule_id ] || [];
    item.session.city = item.city[0];
    item.session.price = item.price;
    _sessions[ item.session.schedule_id ].push( item.session )
  }

  return [
    {
      elem: 'header',
      content: [
      {
        elem: 'title',
        content: 'Ближайшие онлайн-киносеансы'
      },
      {
        elem: 'pagination',
        content: [
        {
          block: 'icon',
          mods: {
            symbol: 'chevron-left',
            circle: true,
            size: 'xxl'
          }
        },
        {
          block: 'icon',
          mods: {
            symbol: 'chevron-right',
            circle: true,
            size: 'xxl'
          }
        }
        ]
      },
      ]
    },
    {
      block: 'radio-group',
      mix: { block: 'ticket-case', elem: 'calendar' },
      mods: {
        type: 'line',
        size: 'l'
      },
      name: 'calendar',
      val: _schedules[0].id,
      options: _schedules.map( item => {
        return {
          val: item.id,
          text: [
            {
              block: 'calendar',
              mods: { view: 'ticket-case' },
              date: item.date_gmt3
            }
          ]
        }
      } )
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'aside',
          content: [
          {
            block: 'paragraph',
            content: [
              {
                block: 'form-field',
                mods: {
                  type: 'select'
                },
                name: 'city',
                id: 'city',
                content: [
                  {
                    block: 'label',
                    content: 'Ваш часовой пояс'
                  },
                  {
                    block: 'select',
                    mods: {
                      mode: 'radio',
                      width: 'available',
                      theme: 'artdoc-dark'
                    },
                    val: 'ru',
                    options: [
                      { val: 'ru', text: 'Россия' },
                      { val: 'ch', text: 'Китай' },
                      { val: 'uk', text: 'Великобритания' },
                      { val: 'us', text: 'США' },
                    ]
                  },
                ]
              },
              {
                block: 'form-field',
                mods: {
                  type: 'select'
                },
                name: 'timezone',
                id: 'timezone',
                content: [
                  {
                    block: 'select',
                    mods: {
                      mode: 'radio',
                      width: 'available',
                      theme: 'artdoc-dark'
                    },
                    val: 'msk',
                    options: [
                      { val: 'kalt', text: 'UTC+2 Калининградское время' },
                      { val: 'msk' , text: 'UTC+3 Московское время' },
                      { val: 'samt', text: 'UTC+4 Самарское время' },
                      { val: 'yekt', text: 'UTC+5 Екатеринбургское время' },
                      { val: 'omst', text: 'UTC+6 Омское время' },
                      { val: 'krat', text: 'UTC+7 Красноярское время' },
                      { val: 'irkt', text: 'UTC+8 Иркутское время' },
                      { val: 'yakt', text: 'UTC+9 Якутское время' },
                      { val: 'vlat', text: 'UTC+10 Владивостокское время' },
                      { val: 'magt', text: 'UTC+11 Магаданское время' },
                      { val: 'pett', text: 'UTC+12 Камчатское время' }
                    ]
                  }
                ]
              },
            ]
          },
          {
            block: 'paragraph',
            content: 'Онлайн-сеансы начинаются в 18:00 по местному времени пяти мировых центров культуры.'
          }
          ]
        },
        {
          elem: 'list-tickets',
          content: _schedules.map( item => {
            return {
              elem: 'list-tickets-set',
              elemMods: {
                show: item.id === _schedules[0].id
              },
              js: {
                day: item.id
              },
              content: {
                block: 'list-tickets',
                code: _code,
                tickets: _sessions[ item.id ]
              }
            }
          } )
        }
      ]
    }
  ]

});
