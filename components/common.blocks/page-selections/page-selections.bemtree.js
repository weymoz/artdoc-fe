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
          content: 'Авторские подборки'
        },
        selections.map( item => {
          return {
            block: 'card-selection',
            mods: {
              view: [ 'selections' ],
              theme: 'artdoc'
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
