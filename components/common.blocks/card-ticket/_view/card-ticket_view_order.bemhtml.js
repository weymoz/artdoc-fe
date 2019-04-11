block('card-ticket').mod('view', 'order').content()( ( node, ctx ) => {

  const tzMinutes = node._tz % 60;
  const tzHours = ( node._tz - tzMinutes ) / 60;

  function fixZero ( number ) {
    number = Math.abs( number );
    return number < 10 ? '0' + number : number;
  }


  const timezone = ( tzHours > 0 ? '+' : '-' ) + fixZero( tzHours ) + ':' + fixZero( tzMinutes );
  const isCinema = (node._type == 'cinema');
  const descrText = ctx.lang === 'en' ? 'On receipt of payment, we\'ll send an e-mail with your ticket and a link to the screening page. The film will be available for screening on ' : 'Мы отправим на вашу электронную почту ссылку на&nbsp;страницу сеанса после оплаты. Фильм будет доступен к просмотру ';
  const payByCard = ctx.lang === 'en' ? 'Pay by card' : 'Оплата картой';
  const descrtext2 = ctx.lang === 'en' ? 'After payment, we will send a link to your email to your email address, which will be available for the next 72 hours. The number of views is unlimited.' : 'После оплаты мы отправим на вашу электронную почту ссылку на&nbsp;страницу просмотра, которая будет доступна в течение следующих 72&nbsp;часов. Количество просмотров не ограничено.'
  const timeDescr = ctx.lang === 'en' ? 'timezone&nbsp;' : 'время&nbsp;';
  const getTicket = ctx.lang === 'en' ? 'Get' : 'Получить';
  const buyTicket = ctx.lang === 'en' ? 'Purchase' : 'Купить';
  const valid = ctx.lang === 'en' ? 'Valid until' : 'Доступен до'

  const description = isCinema ?
    {
      block: 'paragraph',
      content: [
        {
          html: descrText
        },
        {
          block: 'text',
          mods: { format: 'datetime' },
          format: 'DD[&nbsp;]MMMM[ с ]HH:mm[ до ]',
          locale: ctx.lang,
          content: node._time_gmt3
        },
        {
          block: 'text',
          mods: { format: 'datetime' },
          locale: ctx.lang,
          format: 'HH:mm[ (' + timeDescr + 'UTC]',
          content: node._time_gmt3 + 60 * 60 * 3
        },
        timezone,
        ').'
      ]
    } :
    {
      block: 'paragraph',
      content: {
        html: descrtext2
      },
      mods: {
        'bottom-offset': true
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
            node._promo ? '' : payByCard
          ]
        } :
          {
           elem: 'content',
            content: [
              { html: valid + '<br><br>'},
              { elem: 'user-date' },
              { elem: 'user-time' },
              { elem: 'buy' },
              node._promo ? '' : payByCard
          ]
        },
        {
          elem: 'aside',
          content: [
            description,
            { tag: 'br' },
            {
              block: 'form',
              js: {
                movie: ctx.movie
              },
              mods: {
                view: 'order',
                theme: 'artdoc-dark'
              },
              session_id: isCinema ? node._id : null,
              movie_id: isCinema ? null : node._price.object_id,
              isCinema: isCinema,
              lang: node._lang,
              currency: node._currency,
              submitLabel: node._promo ? getTicket : buyTicket
            }
          ]
        }
      ]
    }
  ]
});
