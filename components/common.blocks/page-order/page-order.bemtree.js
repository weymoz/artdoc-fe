block('page-order')(
  replace()(node => {
    let ticket = node.data.api

    if (node.data.lang) {
      node._lang = node.data.lang
    }

    if (node.data.currency) {
      node._currency = node.data.currency
    }

    if (ticket.type == 'cinema') {
      ticket.city = ticket.city[0]

      const promo = node.data.promo

      if (promo.meduza && promo.meduza.includes(ticket.id)) {
        ticket.promo = 'meduza'
      } else {
        ticket.promo = null
      }
    }

    let purchase = node._lang === 'en' ? 'Purchase' : 'Покупка'
    let get = node._lang === 'en' ? 'Get' : 'Получение'
    let access =
      node._lang === 'en'
        ? ' access to view the movie'
        : ' доступа к просмотру фильма'
    let tickets =
      node._lang === 'en' ? ' online ticket' : ' билета на онлайн-сеанс'

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
              {
                block: 'heading',
                mods: { align: 'center', caps: true, size: 'l' }
              },
              {
                block: 'font',
                mods: { family: 'helvetica-neue-condensed-bold', loaded: true }
              }
            ],
            content: [
              ticket.promo === 'meduza' ? get : purchase,
              ticket.type == 'rent' ? access : tickets
            ]
          },
          {
            block: 'card-movie',
            mods: {
              view: 'order'
            },
            movie: ticket.movie,
            lang: node._lang
          },
          {
            block: 'card-ticket',
            mods: {
              view: 'order'
            },
            ticket: ticket,
            lang: node._lang,
            currency: node._currency,
            movie: ticket.movie
          }
        ]
      }
    ]
  })
)
