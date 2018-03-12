block('page-movies').replace()(function(node) {

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
      js: { lang: node.data.lang },
      data: this.data,
      lang: node.data.lang
    },
    {
      block: 'club-footer',
      mix: { block: 'page', elem: 'content' }
    }
  ];
});
