block('page').mod('view', '500')(
  def()( () => {
    return applyNext( { 'data.view': '' } )
  } ),
  content()( () => {
    return {
      elem: 'content',
      elemMods: { width: 'narrow', gap: 'bottom' },
      content: [
        {
          elem: 'title',
          elemMods: { size: 'xxl' },
          mix: { block: 'heading', mods: { 'has-dot': true, size: 'xxl' } },
          content: 'Ошибка сервера'
        },
        {
          block: 'paragraph',
          content: 'Страница временно недоступна. Попробуйте зайти на сайт через несколько минут.'
        }
      ]
    };
  })
)
