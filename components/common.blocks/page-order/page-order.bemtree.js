block('page-order')(


  replace()( node => {
    let ticket = node.data.api;
    ticket.city = ticket.city[0];

    const promo = node.data.promo;

    if ( promo.meduza && promo.meduza.includes( ticket.id ) ) {
      ticket.promo = 'meduza'
    } else {
      ticket.promo = null;
    }

    // switch ( ticket.city_id ) {
    //   case 1:
    //     ticket.city.name = 'Москва';
    //     break;
    //   case 2:
    //     ticket.city.name = 'Лос-Анджелес';
    //     break;
    //   case 3:
    //     ticket.city.name = 'Нью-Йорк';
    //     break;
    //   case 4:
    //     ticket.city.name = 'Лондон';
    //     break;
    //   case 5:
    //     ticket.city.name = 'Токио';
    //     break;
    //   default:
    //     ticket.city.name = 'Бобруйск';
    //     break;
    // }

    return [
      {
        elem: 'content',
        elemMods: { width: 'narrow' },
        content: [
          {
            block: 'breadcrumbs'
          },
          {
            elem: 'title',
            elemMods: { size: 'xl' },
            mix: { block: 'heading', mods: { caps: true, size: 'l' } },
            content: [
              ticket.promo === 'meduza' ? 'Получение' : 'Покупка',
              ' билета на онлайн-сеанс'
            ]
          },
          {
            block: 'card-movie',
            mods: {
              view: 'order'
            },
            movie: ticket.movie
          },
          {
            block: 'card-ticket',
            mods: {
              view: 'order'
            },
            ticket: ticket
          }
        ]
      }
    ];
  } )

)