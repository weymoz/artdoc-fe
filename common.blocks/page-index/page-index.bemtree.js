block('page-index').content()(function() {
  return [
    'Hello from index page',
    {
      tag: 'br'
    },
    {
      block: 'link',
      url: '/schedule',
      content: 'Go to schedule'
    }
  ];
});
