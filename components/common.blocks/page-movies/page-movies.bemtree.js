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
      js: {
        lang: node.data.lang,
        code: node.data.filter.category
      },
      data: this.data,
      lang: node.data.lang
    },
    {
      block: 'club-footer',
      mix: { block: 'page', elem: 'content' }
    }
  ];
});
