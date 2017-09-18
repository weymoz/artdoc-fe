block('page-movies').replace()(function() {
  return [
    {
      block: 'filters',
      data: this.data
    },
    {
      block: 'club-footer',
      mix: { block: 'page', elem: 'content' }
    }
  ];
});
