block('card-movie').elem('play-status')(

  elemMod('status', 'get').content()( node => {
    return [
      {
        elem: 'play-status-header',
        content: node._lang === 'en' ? 'The showtime will start in' : 'Сеанс начнётся через'
      },
      {
        elem: 'play-status-countdown',
        js: {
          starts_in: node._starts_in
        }
      }
    ];
  }),

  elemMod('status', 'ready').def()(''),

  elemMod('status', 'finish').content()( node => {
    return [
      {
        elem: 'play-status-header',
        content: node._type =='rent' ? (node._lang === 'en' ? 'Access is closed' : 'Доступ закрыт') : (node._lang === 'en' ? 'Showtime is finished' : 'Сеанс окончен')
      },
      node._url && {
        block: 'button',
        mods: {
          type: 'link',
          size: 'xxl',
          theme: 'artdoc-dark'
        },
        url: node._url,
        text: node._lang === 'en' ? 'Back to the movie page' : 'На страницу фильма'
      }
    ];
  })

)
