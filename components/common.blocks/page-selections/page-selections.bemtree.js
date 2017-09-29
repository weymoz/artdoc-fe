block('page-selections').replace()(function() {
  const selections = this.data.api;
  return [
    {
      elem: 'content',
      content: [
        {
          block: 'breadcrumbs',
          mix: { block: 'page', elem: 'breadcrumbs' }
        },
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: 'Авторские подборки'
        },
        selections.map( item => {
          return {
            block: 'card-selection',
            mods: {
              view: 'selections'
            },
            selection: item
          }
        } )
      ]
    },
    {
      block: 'pagination',
      params: this.data.pagination
    },
    {
      block: 'section',
      content: [
      {
        block: 'club-footer',
        mix: { block: 'page', elem: 'club' }
      }
      ]
    }
  ];
});
