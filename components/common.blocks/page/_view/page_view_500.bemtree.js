block('page').mod('view', '500')(
  def()( node => {
    node.customContent =  {
      elem: 'content',
      elemMods: { width: 'narrow' },
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
    return applyNext();
  })
)
