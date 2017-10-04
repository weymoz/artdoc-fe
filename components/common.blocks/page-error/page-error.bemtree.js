block('page-error').replace()( node => {
  return [
    {
      elem: 'content',
      elemMods: { width: 'narrow' },
      content: [
        {
          elem: 'title',
          elemMods: { size: 'xxl' },
          mix: [
            { block: 'heading', mods: { 'has-dot': true, size: 'xxl' } },
          ],
          content: 'Что-то пошло не так'
        },
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
            size: 'xl'
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
