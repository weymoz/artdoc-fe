block('footer').content()(function() {
  return [
    {
      elem: 'content',
      content: [
        {
          elem: 'about',
          content: [
            {
              block: 'logo',
              mods: { title: true }
            },
            {
              block: 'paragraph',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content: 'Самый большой архив документального кино на русском языке'
            }
          ]
        },
        {
          elem: 'for-viewers',
          content: [
            {
              block: 'title',
              mods: {
                size: 'm'
              },
              content: 'Для зрителей'
            },
            {
              block: 'list',
              mods: {
                type: 'unstyled'
              },
              content: [
                { elem: 'item', content: 'О проекте' },
                { elem: 'item', content: 'Подборки' },
                { elem: 'item', content: 'Онлайн-киносеансы' },
                { elem: 'item', content: 'Все фильмы' },
                { elem: 'item', content: 'Помощь' }
              ]
            }
          ]
        },
        {
          elem: 'for-professionals',
          content: [
            {
              block: 'title',
              mods: {
                size: 'm'
              },
              content: 'Профессионалам кино'
            },
            {
              block: 'list',
              mods: {
                type: 'unstyled'
              },
              content: [
                { elem: 'item', content: 'Клуб artdoc.media' },
                { elem: 'item', content: 'Аккредитованные фестивали' },
                { elem: 'item', content: 'Аккредитованная пресса' },
                { elem: 'item', content: 'Ретроспективы' },
                { elem: 'item', content: 'Предложить фильм' }
              ]
            }
          ]
        },
        {
          elem: 'contacts',
          content: [
            {
              block: 'list',
              type: {
                type: 'unstyled'
              },
              content: [
                'office@artdocfest.com',
                'LV 1011 Latvia Riga Stabu 19-2'
              ]
            }
          ]
        }
      ]
    }
  ];
});
