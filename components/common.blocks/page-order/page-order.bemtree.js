block('page-order')(
  replace()( node => {

    let ticket = node.data.api;

    if (ticket.type == 'cinema') {

      ticket.city = ticket.city[0];

      const promo = node.data.promo;

      if ( promo.meduza && promo.meduza.includes( ticket.id ) ) {
        ticket.promo = 'meduza'
      } else {
        ticket.promo = null;
      }
    }

    return [
      {
        elem: 'content',
        elemMods: { width: 'narrow', gap: 'bottom' },
        content: [
          {
            block: 'breadcrumbs'
          },
          {
            elem: 'title',
            elemMods: { size: 'xl' },
            mix: [
              { block: 'heading', mods: { align: 'center', caps: true, size: 'l' } },
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
            ],
            content: [
              ticket.promo === 'meduza' ? 'Получение' : 'Покупка',
              ticket.type == 'rent' ? ' доступа к просмотрю фильма' : ' билета на онлайн-сеанс'
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
