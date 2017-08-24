block('page-thanks').replace()( node => {
  return [
    {
      elem: 'content',
      elemMods: { view: 'narrow' },
      content: [
        {
          elem: 'header',
          content: [
            {
              elem: 'title',
              content: 'Спасибо за покупку билета!'
            },
          ]
        },
        {
          block: 'paragraph',
          content: 'Оплата прошла успешно! На почту выслано письмо со ссылкой на страницу просмотра фильма. Приятного киносеанса!'
        },
        {
          block: 'card-movie',
          mods: {
            view: 'ticket'
          },
          movie: node.data.api.movie
        }
      ]
    }
  ]
});
