block('page-thanks')(

  match( node => node.data.api.ticket && node.data.api.session && node.data.api.movie ).replace()( node => {
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
            content: 'Оплата прошла успешно! На почту ' + node.data.api.ticket.email + ' выслано письмо со ссылкой на страницу просмотра фильма. Приятного киносеанса!'
          },
          {
            block: 'layout',
            mix: { block: 'paragraph' },
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
          },
          {
            block: 'card-ticket',
            // code: _code,
            ticket: node.data.api.session,
            js: { ticket: node.data.api.session, timezoneOffset: 0 }
          },
          {
            block: 'card-movie',
            mods: {
              view: 'ticket'
            },
            movie: node.data.api.movie
          },
          {
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
        ]
      },
      {
        block: 'section',
        content: [
        {
          block: 'club-footer',
          mix: { block: 'page', elem: 'club' }
        }
        ]
      }
    ]
  } ),

  match( node => node.data.api.message === 'mail send' && node.data.api.mode === 'free' ).replace()( () => {
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
                content: 'Ваш промо-билет успешно активирован'
              },
            ]
          },
          { tag: 'br' },
          {
            block: 'paragraph',
            content: 'Активация прошла успешно! На вашу почту выслано письмо со ссылкой на страницу просмотра фильма. Приятного киносеанса!'
          },
          { tag: 'br' },
          { tag: 'br' },
          { tag: 'br' },
          { tag: 'br' },
          { tag: 'br' },
          { tag: 'br' }
        ]
      },
      {
        block: 'section',
        content: [
        {
          block: 'club-footer',
          mix: { block: 'page', elem: 'club' }
        }
        ]
      }
    ]
  } )

)
