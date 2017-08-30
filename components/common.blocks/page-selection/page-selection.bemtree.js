block('page-selection').replace()( node => {
  return [
    {
      elem: 'content',
      content: [
        {
          block: 'card-selection',
          mods: {
            view: [ 'detail' ],
            theme: node.data.api.image ? 'artdoc' : 'artdoc-dark'
          },
          selection: node.data.api
        }
      ]
    },
    { block: 'pagination', params: node.data.pagination },
    {
      block: 'section',
      content: [
      {
        block: 'club-footer',
        mix: { block: 'page-selection', elem: 'club' }
      }
      ]
    }
  ];
});
