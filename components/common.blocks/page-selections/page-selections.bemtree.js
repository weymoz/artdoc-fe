block('page-selections').replace()(function() {
  const selections = this.data.api;
  return [
    {
      elem: 'content',
      content: [
        {
          block: 'breadcrumbs'
        },
        {
          elem: 'title',
          mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
          content: 'Авторские подборки'
        },
        selections.map( item => {
          return {
            block: 'card-selection',
            mods: {
              view: [ 'selections' ],
              theme: this.data.api.image ? 'artdoc' : 'artdoc-dark'
            },
            selection: item
          }
        } )
      ]
    },
    {
      block: 'pagination',
      params: this.data.pagination
    }
  ];
});
