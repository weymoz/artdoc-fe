block('page-thanks')(
  match(node => node.data.api.ticket && node.data.api.movie).replace()(node => {
    const isCinema = node.data.api.type != 'rent';
    const _discuss =
      'В 21:00 состоится обсуждение фильма с автором и зрителями. Ссылка на обсуждение будет доступна на странице просмотра фильма.';
    const _ticket = node.data.api.session;

    const _movie = node.data.api.movie;

    function purchaseGoods() {
      let purchased = {
        ecommerce: {
          purchase: {
            actionField: {
              id: _movie.id,
              revenue: _movie.price.price,
              currency: _movie.price.currency === '1' ? 'RUB' : 'USD'
              // 'coupon': order.promocode_id
            },
            products: {
              name: _movie.name,
              id: _movie.id,
              price: _movie.price.price,
              brand: 'ArtdocMedia',
              variant: node.data.api.type,
              quantity: 1
            }
          }
        }
      };
      return JSON.stringify(purchased);
    }

    return [
      {
        elem: 'js',
        content:
          "if(!window.dataLayer){window.dataLayer=new Array()}; window.dataLayer.push('" +
          purchaseGoods() +
          "')"
      },
      {
        elem: 'content',
        elemMods: { width: 'narrow', gap: 'bottom' },
        content: [
          {
            elem: 'title',
            elemMods: { size: 'xxl' },
            mix: [
              { block: 'heading', mods: { align: 'center', caps: true } },
              {
                block: 'font',
                mods: { family: 'helvetica-neue-condensed-bold', loaded: true }
              }
            ],
            content: node.i18n('thanks', 'title')
          },
          {
            block: 'paragraph',
            mods: {
              'bottom-offset': !isCinema
            },
            content:
              node.i18n('thanks', 'emailpre') +
              node.data.api.ticket.email +
              node.i18n('thanks', 'emailpost')
          },
          isCinema && {
            block: 'layout',
            mix: {
              block: 'paragraph'
            },
            content: [
              {
                elem: 'aside',

                content: {
                  elem: 'discuss',
                  mix: { block: 'card-movie', elem: 'discussion' }
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
            ticket: _ticket,
            lang: node.data.lang,
            js: { ticket: node.data.api.session, timezoneOffset: 0 }
          },
          {
            block: 'card-movie',
            mods: { view: 'ticket' },
            movie: node.data.api.movie,
            lang: node.data.lang
          },
          { tag: 'br' },
          {
            block: 'list',
            mods: { type: 'numeric' },
            items: [
              isCinema
                ? node.i18n('thanks', 'condition')
                : node.i18n('thanks', 'cinema1'),
              node.i18n('thanks', 'cinema2'),
              node.i18n('thanks', 'cinema3')
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
    ];
  }),

  match(
    node =>
      node.data.api.message === 'mail send' && node.data.api.mode === 'free'
  ).replace()(node => {
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
                content: node.i18n('thanks', 'ticketSuccess')
              }
            ]
          },
          { tag: 'br' },
          {
            block: 'paragraph',
            mods: {
              lead: true
            },
            content: node.i18n('thanks', 'showtimeSuccess')
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
    ];
  })
);
