block('page-movies').replace()(function() {


  return [
    {
      elem: 'content',
      content: {
        block: 'breadcrumbs',
        mix: { block: 'page', elem: 'breadcrumbs' }
      }
    },
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
