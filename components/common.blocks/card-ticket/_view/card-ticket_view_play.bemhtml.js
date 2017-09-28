block('card-ticket').mod('view', 'play')(

  addMix()({ block: 'font', mods: { family: 'helvetica-neue-condensed', loaded: true }  }),

  content()( node => {
    return [
      {
        elem: 'header',
        content: [
          'Онлайн-сеанс',
        ]
      },
      {
        elem: 'content',
        content: [
          { elem: 'room' },
          { elem: 'city' },

          { elem: 'user-date' },
          ', начало в',
          { html: '&nbsp;' },
          { elem: 'user-time' }
        ]
      },
      {
        elem: 'footer',
        content: [
          'Доступен до ',
          {
            block: 'text',
            mods: {
              format: 'datetime'
            },
            format: 'HH:mm',
            content: node._time_gmt3 + 3 * 60 * 60
          },
        ]
      }
    ]
  })
)
