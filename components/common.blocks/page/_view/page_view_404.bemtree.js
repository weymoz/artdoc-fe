block('page').mod('view', '404')(
  def()( () => {
    return applyNext( { 'data.view': '' } )
  } ),
  content()( (node) => {

    return {
      elem: 'content',
      elemMods: { width: 'narrow', gap: 'bottom' },
      mix: { block: 'page-about' },
      content: [
        {
          elem: 'title',
          elemMods: { size: 'xxl' },
          mix: { block: 'heading', mods: { 'has-dot': true, size: 'xxl' } },
          content: node.data.lang === 'en' ? 'Page not found' : 'Страница не найдена'
        },
        {
          block: 'paragraph',
          content: [
            node.data.lang === 'en' ? 'Url isn\'t correct or such page doesn\'t exists' : 'Адрес набран неправильно, или такой страницы не существует.',
            { tag: 'br' },
            node.data.lang === 'en' ? 'Back to the ' : 'Перейти ',
            {
              block: 'link',
              url: '/' + node.data.lang + '/',
              content: node.data.lang === 'en' ? 'homepage' : 'на главную'
            },
            '.'
          ]
        }
      ]
    };
  } )
)
