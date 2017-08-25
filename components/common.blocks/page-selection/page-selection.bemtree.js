block('page-selection').replace()( node => {
  return [
    {
      elem: 'content',
      content: [
        {
          block: 'card-selection',
          mods: {
            view: [ 'detail' ]
          },
          selection: node.data.api
        }
      ]
    },
    { block: 'pagination', params: node.data.pagination }
  ];
});
