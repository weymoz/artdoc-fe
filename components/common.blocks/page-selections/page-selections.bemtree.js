block('page-selections').replace()(function() {
  const selections = this.data.api;

  return [
    {
      elem: 'content',
      elemMods: { gap: 'bottom' },
      content: [
        {
          block: 'breadcrumbs',
          mix: { block: 'page', elem: 'breadcrumbs' }
        },
        {
          elem: 'title',
          elemMods: { view: 'condensed-bold', size: 'xl', gap: 'top' },
          mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
          content: this.data.lang === 'en' ? 'Selections' : 'Авторские подборки'
        },
        selections && selections.map( item => {
          return {
            block: 'card-selection',
            mods: {
              view: 'selections'
            },
            selection: item,
            lang: this.data.lang
          }
        } )
      ]
    },
    // {
    //   block: 'pagination',
    //   params: this.data.pagination
    // },
    {
      block: 'club-footer',
      mix: { block: 'page', elem: 'club' }
    }
  ];
});
