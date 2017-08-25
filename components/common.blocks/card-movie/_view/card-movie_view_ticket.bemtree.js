block('card-movie').mod('view', 'short')(

  def()( ( node, ctx ) => {
    ctx.movie.url = ctx.movie.code ? '/movie/' + ctx.movie.code : null;
    return applyNext();
  }),

  content()( () => {
    return [
      {
        block: 'paragraph',
        content: {
          block: 'layout',
          content: [
            {
              elem: 'aside',
              content: 'icon'
            },
            {
              elem: 'content',
              content: 'В 20:00 состоится обсуждение фильма с автором в закрытой группе Facebook. Ссылка на обсуждение будет доступна на странице просмотра фильма.'
            }
          ]
        }
      },
      {
        block: 'calendar',
        mods: {
          view: 'ticket-case'
        }
      },
      {
        elem: 'section',
        content: [
          {
            elem: 'content',
            elemMods: { type: 'link' },
            content: [
              { elem: 'cover' }
            ]
          },
          {
            elem: 'aside',
            content: [
              { elem: 'orig-name' },
              { elem: 'name' },
              {
                elem: 'list',
                elemMods: {
                  delimiter: 'vertical'
                },
                content: [
                  { elem: 'director' },
                  { elem: 'countries' },
                  { elem: 'year' }
                ]
              },
              {
                elem: 'list',
                content: [
                  { elem: 'tvpg' },
                  { elem: 'duration' },
                  { elem: 'language' },
                  { elem: 'subs' }
                ]
              }
            ]
          }
        ]
      },
      {
        elem: 'section',
        content: {
          block: 'list',
          mods: {
            type: 'numeric'
          },
          items: [
            'Фильм доступен к просмотру 3 часа с момента начала онлайн-сеанса. По окончании 3 часов показ прекращается.',
            'Просмотр фильма индивидуальный и доступен только на одном устройстве в один момент времени. Не для массового показа.',
            'В случае неиспользованного билета, деньги не возвращаются'
          ]
        }
      }
    ];
  })

);
