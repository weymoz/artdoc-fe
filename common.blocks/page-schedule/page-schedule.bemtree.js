block('page-schedule').content()(function() {
  return [
    'Hello from schedule page',
    {
      tag: 'br'
    },
    {
      block: 'link',
      url: '/movie/1',
      content: 'Go to film'
    },
    {
      tag: 'br'
    },
    {
      block: 'link',
      url: '/',
      content: 'Go to index'
    }
  ];
});
