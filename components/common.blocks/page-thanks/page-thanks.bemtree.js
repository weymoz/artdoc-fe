block('page-thanks')(

  match( node => node.data.api.ticket && node.data.api.movie ).replace()( node => {
    const isCinema = node.data.api.type != 'rent';

    let _discuss = 'В 21:00 состоится обсуждение фильма с автором и зрителями. Ссылка на обсуждение будет доступна на странице просмотра фильма.'

    return [
      {
        elem: 'content',
        elemMods: { width: 'narrow', gap: 'bottom' },
        content: [
          {
            elem: 'title',
            elemMods: { size: 'xxl' },
            mix: [
              { block: 'heading', mods: { align: 'center', caps: true } },
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
            ],
            content: 'Спасибо за покупку билета!'
          },
          {
            block: 'paragraph',
            content: 'Оплата прошла успешно! На почту ' + node.data.api.ticket.email + ' выслано письмо со ссылкой на страницу просмотра фильма. Приятного просмотра!'
          },
          {
            block: 'layout',
            mix: { block: 'paragraph' },
            content: [
              {
                elem: 'aside',

                content: {
                  elem: 'discuss',
                  mix: {block: 'card-movie', elem: 'discussion'}
                }
              },
              {
                elem: 'content',
                content: _discuss
              }
            ]
          },
          {
            block: 'card-ticket',
            mods: {
              view: 'ticket'
            },
            ticket: node.data.api.session,
            js: { ticket: node.data.api.session, timezoneOffset: 0 }
          },
          {
            block: 'card-movie',
            mods: { view: 'ticket' },
            movie: node.data.api.movie
          },
          { tag: 'br' },
          {
            block: 'list',
            mods: { type: 'numeric' },
            items: [
              isCinema ? 'Фильм доступен к просмотру 3 часа с момента начала онлайн-сеанса. По окончании 3 часов показ прекращается.'
                :'Фильм доступен к просмотру 72 часа с момента оплаты. По окончании 72 часов доступ будет закрыт.',
              'Просмотр фильма индивидуальный и доступен только на одном устройстве в один момент времени. Не для массового показа.',
              'В случае неиспользованного билета, деньги не возвращаются.'
            ],

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
        elemMods: { width: 'narrow', gap: 'bottom' },
        content: [
          {
            elem: 'header',
            content: [
              {
                elem: 'title',
                content: 'Ваш билет успешно активирован'
              },
            ]
          },
          { tag: 'br' },
          {
            block: 'paragraph',
            mods: {
              lead: true
            },
            content: 'Активация прошла успешно. На вашу почту выслано письмо со ссылкой на страницу просмотра фильма. Приятного просмотра.'
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
  } )

)
