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
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              mods: {
                size: 'm'
              },
              content: 'Зрителям'
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
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
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
               // { elem: 'item', content: 'Ретроспективы' },
               // { elem: 'item', content: 'Предложить фильм' }
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
        },
        { elem: 'analytics',
          tag: 'script',
          content:
            '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\', \'UA-105336712-1\', \'auto\');ga(\'send\', \'pageview\');'
        }

      ]
    }
  ];
});
