block('ticket-case')(
  addJs()(true),

  elem('title')(
    addMix()( { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } } )
  ),
  match( ( node, ctx ) => ctx.movie ).content()( ( node, ctx ) => {
    const _schedules = ctx.movie.schedules,
          _code = ctx.movie.code;

    _schedules.sort(function(a,b) {
      return (a.date_gmt3 > b.date_gmt3) ? 1 : ((b.date_gmt3 > a.date_gmt3) ? -1 : 0);
    } )

    let _sessions = {};

    for ( let item of ctx.movie.sessions ) {
      _sessions[ item.session.schedule_id ] = _sessions[ item.session.schedule_id ] || [];
      item.session.city = item.city[0];
      item.session.price = item.price;
      _sessions[ item.session.schedule_id ].push( item.session )
    }

    return [
      _schedules.length > 1
      ? {
          elem: 'header',
          content: [
            {
              elem: 'title',
              content: 'Выберите день и время онлайн-сеанса'
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
            }
          ]
        }
      : '',
      {
        block: 'radio-group',
        mix: [
          { block: 'ticket-case', elem: 'calendar' },
          { block: 'font', mods: { family: 'helvetica-neue-condensed' } }
        ],
        mods: {
          type: 'line',
          size: 'l'
        },
        name: 'calendar',
        val: _schedules[0].id,
        options: _schedules.slice(0, 7).map( item => {

          return {
            val: item.id,
            text: [
              {
                block: 'calendar',
                mods: { view: 'ticket-case' },
                date: item.date_gmt3,
                discuss: item.discuss_preview
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
                    type: 'select',
                    size: 'l'
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
                        calendar: true,
                        mode: 'radio',
                        width: 'available',
                        size: 'l',
                        theme: 'artdoc-dark'
                      },
                      val: 0,
                      options: [
                        { text: 'UTC−11:00', val: (11 * 60 * -1) },
                        { text: 'UTC−10:00', val: (10 * 60 * -1) },
                        { text: 'UTC−09:00', val: (9 * 60 * -1) },
                        { text: 'UTC−07:00', val: (7 * 60 * -1) },
                        { text: 'UTC−06:00', val: (6 * 60 * -1) },
                        { text: 'UTC−05:00', val: (5 * 60 * -1) },
                        { text: 'UTC−04:00', val: (4 * 60 * -1) },
                        { text: 'UTC-08:00', val: (8 * 60 * -1) },
                        { text: 'UTC-05:00', val: (5 * 60 * -1) },
                        { text: 'UTC-04:00', val: (4 * 60 * -1) },
                        { text: 'UTC-03:30', val: ((3 * 60 + 30) * -1) },
                        { text: 'UTC-03:00', val: (3 * 60 * -1) },
                        { text: 'UTC±00:00', val: 0 },
                        { text: 'UTC+01:00', val: (1 * 60) },
                        { text: 'UTC+02:00', val: (2 * 60) },
                        { text: 'UTC+03:00', val: (3 * 60) },
                        { text: 'UTC+03:30', val: (3 * 60 + 30) },
                        { text: 'UTC+05:00', val: (5 * 60) },
                        { text: 'UTC+05:30', val: (5 * 60 + 30) },
                        { text: 'UTC+06:00', val: (6 * 60) },
                        { text: 'UTC+06:30', val: (6 * 60 + 30) },
                        { text: 'UTC+07:00', val: (7 * 60) },
                        { text: 'UTC+08:00', val: (8 * 60) },
                        { text: 'UTC+09:00', val: (9 * 60) },
                        { text: 'UTC+09:30', val: (9 * 60 + 30) },
                        { text: 'UTC+10:00', val: (10 * 60) },
                        { text: 'UTC+11:00', val: (11 * 60) }
                      ]
                    },
                  ]
                },
                // {
                //   block: 'form-field',
                //   mods: {
                //     type: 'select'
                //   },
                //   name: 'timezone',
                //   id: 'timezone',
                //   content: [
                //     {
                //       block: 'select',
                //       mods: {
                //         mode: 'radio',
                //         width: 'available',
                //         theme: 'artdoc-dark'
                //       },
                //       val: 'msk',
                //       options: [
                //         { val: 'kalt', text: 'UTC+2 Калининградское время' },
                //         { val: 'msk' , text: 'UTC+3 Московское время' },
                //         { val: 'samt', text: 'UTC+4 Самарское время' },
                //         { val: 'yekt', text: 'UTC+5 Екатеринбургское время' },
                //         { val: 'omst', text: 'UTC+6 Омское время' },
                //         { val: 'krat', text: 'UTC+7 Красноярское время' },
                //         { val: 'irkt', text: 'UTC+8 Иркутское время' },
                //         { val: 'yakt', text: 'UTC+9 Якутское время' },
                //         { val: 'vlat', text: 'UTC+10 Владивостокское время' },
                //         { val: 'magt', text: 'UTC+11 Магаданское время' },
                //         { val: 'pett', text: 'UTC+12 Камчатское время' }
                //       ]
                //     }
                //   ]
                // },
              ]
            },
            {
              block: 'paragraph',
              mods: { bold: true, size: 's' },
              content: 'Онлайн-сеансы начинаются в 18:00 по местному времени пяти мировых центров культуры.'
            }
            ]
          },
          {
            elem: 'list-tickets',
            content: _schedules.map( item => {
              return {
                elem: 'list-tickets-set',
                elemMods: { show: item.id === _schedules[0].id },
                js: { day: item.id },
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

  } )
)
