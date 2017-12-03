block('page').mod('view', '404')(
  def()( () => {
    return applyNext( { 'data.view': '' } )
  } ),
  content()( () => {
    return {
      elem: 'content',
      elemMods: { width: 'narrow', gap: 'bottom' },
      mix: { block: 'page-about' },
      content: [
        {
          elem: 'title',
          elemMods: { size: 'xxl' },
          mix: { block: 'heading', mods: { 'has-dot': true, size: 'xxl' } },
          content: 'Страница не найдена'
        },
        {
          block: 'paragraph',
          content: [
            'Адрес набран неправильно, или такой страницы не существует.',
            { tag: 'br' },
            'Перейти ',
            {
              block: 'link',
              url: '/',
              content: 'на главную'
            },
            '.'
          ]
        }
      ]
    };
  } )
)
