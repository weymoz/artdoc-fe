block('card-ticket').mod('view', 'movie').content()( () => {
  return [
    {
      elem: 'header',
      content: [
        { elem: 'room' },
        { elem: 'city' },
      ]
    },
    {
      elem: 'content',
      content: [
        { elem: 'user-date' },
        { elem: 'user-time' }
      ]
    },
    {
      elem: 'footer',
      content: { elem: 'buy' }
    },
    {
      elem: 'footer',
      content: { elem: 'left' }
    }
  ]
});
