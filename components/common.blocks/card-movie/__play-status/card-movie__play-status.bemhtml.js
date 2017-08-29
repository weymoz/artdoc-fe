block('card-movie').elem('play-status')(

  elemMod('status', 'get').content()( node => {
    return [
      {
        elem: 'play-status-header',
        content: 'Сеанс начнётся через'
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
        content: 'Сеанс окончен'
      },
      {
        block: 'button',
        mods: {
          type: 'link',
          size: 'xxl',
          theme: 'artdoc-dark'
        },
        url: node._url,
        text: 'На страницу фильма'
      }
    ];
  })

)
