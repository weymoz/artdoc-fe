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
          content: node.i18n('error', 'wrong')
        },
        {
          block: 'paragraph',
          content: [
            node.i18n('error', 'error'),
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
          text: node.i18n('error', 'repeat')
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
