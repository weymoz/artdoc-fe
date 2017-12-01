block('card-ticket').mod('view', 'order').content()( node => {

  const tzMinutes = node._tz % 60;
  const tzHours = ( node._tz - tzMinutes ) / 60;

  function fixZero ( number ) {
    number = Math.abs( number );
    return number < 10 ? '0' + number : number;
  }

  const timezone = ( tzHours > 0 ? '+' : '-' ) + fixZero( tzHours ) + ':' + fixZero( tzMinutes );

  const isCinema = (node._type == 'cinema');


  console.log(isCinema);
  const description = isCinema ?
    {
      block: 'paragraph',
      content: [
        'Мы отправим на вашу электронную почту ссылку на страницу ',
        'сеанса после оплаты. Фильм будет доступен к просмотру ',
        {
          block: 'text',
          mods: { format: 'datetime' },
          format: 'DD[&nbsp;]MMMM[ с ]HH:mm[ до ]',
          content: node._time_gmt3
        },
        {
          block: 'text',
          mods: { format: 'datetime' },
          format: 'HH:mm[ (время&nbsp;UTC]',
          content: node._time_gmt3 + 60 * 60 * 3
        },
        timezone,
        ').'
      ]
    } :
    {
      block: 'paragraph',
      content: {
        html: 'После оплаты мы отправим на вашу электронную почту ссылку на&nbsp;страницу ' +
        'просмотра, которая будет доступна в течение следующих 72&nbsp;часов. Количество просмотров не ограничено.'
      }


    }


  return [
    isCinema &&
    {
      elem: 'header',
      content: { elem: 'left' }
    },
    {
      elem: 'section',
      content: [
        isCinema ?
        {
          elem: 'content',
          content: [
            { elem: 'user-date' },
            { elem: 'room' },
            { elem: 'city' },
            { elem: 'user-time' },
            { elem: 'buy' },
            node._promo ? '' : 'Оплата картой'
          ]
        } :
          {
           elem: 'content',
            content: [
              { html: 'Доступен до<br><br>'},
              { elem: 'user-date' },
              { elem: 'user-time' },
              { elem: 'buy' },
              node._promo ? '' : 'Оплата картой'
          ]
        },
        {
          elem: 'aside',
          content: [
            description,
            { tag: 'br' },
            {
              block: 'form',
              mods: {
                view: 'order'
              },
              session_id: isCinema ? node._id : null,
              movie_id: isCinema ? null : node._price.object_id,
              isCinema: isCinema,
              submitLabel: node._promo ? 'Получить' : 'Купить'
            }
          ]
        }
      ]
    },
    { tag: 'br' },
    { tag: 'br' },
    { tag: 'br' },
    { tag: 'br' },
    { tag: 'br' },
    { tag: 'br' }
  ]
});
