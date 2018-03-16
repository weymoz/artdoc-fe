block('page').mod('view', '500')(
  def()( () => {
    return applyNext( { 'data.view': '' } )
  } ),
  content()( (node) => {
    return {
      elem: 'content',
      elemMods: { width: 'narrow', gap: 'bottom' },
      content: [
        {
          elem: 'title',
          elemMods: { size: 'xxl' },
          mix: { block: 'heading', mods: { 'has-dot': true, size: 'xxl' } },
          content: node.data.lang === 'en' ? 'Server error' : 'Ошибка сервера'
        },
        {
          block: 'paragraph',
          content: node.data.lang === 'en' ? 'This page is temporarily unavailable. Please, try again to visit site in a few minutes later.' : 'Страница временно недоступна. Попробуйте зайти на сайт через несколько минут.'
        }
      ]
    };
  })
)
