block('page-error').replace()( node => {
  return [
    {
      elem: 'content',
      content: [
        {
          block: 'breadcrumbs'
        }
      ]
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'title',
          content: 'Что-то пошло не так…'
        }
      ]
    },
    {
      elem: 'content',
      elemMods: {
        view: 'narrow'
      },
      content: [
        {
          block: 'paragraph',
          content: [
            'Произошла ошибка при проведении платежа: ',
            node.data.api.error,
          ]
        },
        { tag: 'br' },
        {
          block: 'button',
          mods: {
            type: 'link',
            size: 'l'
          },
          url: 'javascript:history.back()',
          text: 'Повторить платёж'
        },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
        { tag: 'br' },
      ]
    }
  ];
});
