block('card-ticket').mod('view', 'play')(

  addMix()({ block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true }  }),

  content()( node => {
    return [
      {
        elem: 'header',
        content: [
          node._lang === 'en' ? 'Online-screening' : 'Онлайн-сеанс',
        ]
      },
      {
        elem: 'content',
        content: [
          { elem: 'room' },
          { elem: 'city' },
          { elem: 'user-date' },
          node._lang === 'en' ? ', start at' : ', начало в',
          { html: '&nbsp;' },
          { elem: 'user-time' }
        ]
      },
      {
        elem: 'footer',
        content: [
          node._lang === 'en' ? 'Awailable until ' : 'Доступен до ',
          {
            block: 'text',
            mods: { format: 'datetime' },
            locale: node._lang,
            format: 'HH:mm',
            content: node._time_gmt3 + 3 * 60 * 60
          }
        ]
      }
    ]
  })
)
