block('page-order')(

  replace()( node => {
    let ticket = node.data.api;
    ticket.city = ticket.city[0];

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
        elemMods: {
          view: 'narrow'
        },
        content: [
          {
            block: 'breadcrumbs'
          },
          {
            elem: 'title',
            mods: {
              size: 'm'
            },
            content: 'Покупка билета на онлайн-сеанс'
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