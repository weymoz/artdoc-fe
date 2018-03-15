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
        code: node.data.filter.category,
        currency: node.data.currency
      },
      data: this.data,
      lang: node.data.lang,
      currency: node.data.currency
    },
    {
      block: 'club-footer',
      mix: { block: 'page', elem: 'content' }
    }
  ];
});
