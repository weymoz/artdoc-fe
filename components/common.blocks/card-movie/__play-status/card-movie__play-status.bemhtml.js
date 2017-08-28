block('card-movie').elem('play-status')(
  content()( node => {
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
  })
)
