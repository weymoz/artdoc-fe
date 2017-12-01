block('page-club').wrap()(function() {
  return [
    {
      block: 'page',
      elem: 'content',
      content: {
        block: 'breadcrumbs',
        mix: { block: 'page', elem: 'breadcrumbs' }
      }
    },
    this.ctx
  ]
})

block('page-club').content()(function() {
    return [
      {
        elem: 'content',
        content: [
          {
            elem: 'title',
            elemMods: { size: 'xxl', gap: 'top' },
            mix: { block: 'heading', mods: { 'has-dot': true, size: 'xxl' } },
            content: 'Клуб Артдок'
          },
          {
            block: 'paragraph',
            content: 'Клуб Артдок — это закрытое сообщество профессионалов документального кино. В клуб входят представители киноиндустрии: директора и члены отборочных комиссий международных фестивалей, дистрибьюторы неигрового кино, сотрудники телеканалов и СМИ, отвечающие за покупку неигрового кино, руководители культурных клубов и центров, кинокритики и журналисты, пишущие для СМИ о неигровом кино.'
          },
          {
            block: 'page',
            elem: 'title',
            elemMods: { size: 'xl' },
            mix: [
              { block: 'heading', mods: { caps: true, size: 'l' } },
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
            ],
            content: 'Привилегии участников клуба'
          },
          {
            elem: 'rate-list',
            content: [
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                  content:[
                    {
                      elem: 'image',
                      mix: [
                        { block: 'rate-card', elem: 'count'   },
                        { block: 'rate-card', elem: 'count_1' }
                      ]
                    },
                    'Бесплатный просмотр всех фильмов на сайте АртдокМедиа, кроме премьер текущего года '
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                  {
                    elem: 'image',
                    mix: [
                      { block: 'rate-card', elem: 'count'  },
                      { block: 'rate-card', elem: 'count_2'}
                    ]
                  },
                  'Бесплатные билеты на любые онлайн-киносеансы АртдокМедиа'
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content:[
                  {
                    elem: 'image',
                    mix: [
                      { block: 'rate-card', elem: 'count'   },
                      { block: 'rate-card', elem: 'count_3' }
                    ]
                  },
                  'Пригласительные билеты на церемонию открытия и закрытия фестиваля Артдокфест'
                ]
              },
              {
                block: 'rate-card',
                mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
                content: [
                  {
                    elem: 'image',
                    mix: [
                      { block: 'rate-card', elem: 'count'   },
                      { block: 'rate-card', elem: 'count_4' }
                    ]
                  },
                  'Посещение всех показов и мероприятий Артдокфеста в России в течение года'
                ]
              }
            ]
          }
        ]
      },
      {
        elem: 'footer',
        content: [
          {
            elem: 'footer-content',
            content: [
              {
                block: 'page',
                elem: 'title',
                elemMods: { size: 'xl' },
                mix: [
                  { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
                  { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
                ],
                content: 'Вступить в клуб'
              },
              {
                block: 'paragraph',
                content: 'Вступление в клуб для представителей киноиндустрии бесплатно и осуществляется только по заявкам.'
              },
              {
                block: 'paragraph',
                mods: { align: 'center' },
                content: {
                  block: 'button',
                  mix: { block: 'page-club', elem: 'get-card' },
                  mods: {
                    type: 'link',
                    size: 'xxl',
                    theme: 'artdoc-dark'
                  },
                  text: 'Оставить заявку',
                  url: 'mailto:media@artdocfest.com'
                }
              }
            ]
          },
          {
            elem: 'footer-content',
            content: [
              {
                block: 'page',
                elem: 'title',
                elemMods: { size: 'xl' },
                mix: [
                  { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
                  { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
                ],
                content: 'Клубная карта'
              },
              {
                elem: 'image',
                mix: { block: 'page-club', elem: 'card-image' }
              },
              {
                block: 'paragraph',
                content: [
                  'Для вступления в клуб необязательно быть представителем киноиндустрии. Человек или организация, готовые оказать поддержку Артдокфесту может стать членом клуба Artdoc — для этого мы выпускаем 100 карт «Партнёр Артдокфеста» сроком на один год. Обладатели карты имеют все привелегии участников клуба. ',
                  {
                    block: 'link',
                    mods: { view: 'text' },
                    mix: { block: 'page-club', elem: 'link' },
                    url: 'mailto:media@artdocfest.com',
                    content: 'Напишите нам'
                  },
                  ' чтобы, узнать подробности о приобретении карты.'
                ]
              }
            ]
          }
        ]
      },
      {
        attrs: { id: 'performers' },
      },
      {
        elem: 'content',
        content: [
          {
            block: 'page',
            elem: 'title',
            elemMods: { size: 'xl' },
            mix: [
              { block: 'heading', mods: { caps: true, size: 'l' } },
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
            ],
            content: 'Участники клуба АртДок'
          },
          {
           elem: 'party',
          },
          {
            elem: 'hidden',
            elemMods: {
              hide: true
            },
            content: [
              {
                elem: 'party',
                elemMods: {
                  hide: true
                }
              }
            ]
          },
          // {
          //   block: 'button',
          //   mix: { block: 'page-club', elem: 'make-party' },
          //   text: 'Показать ещё'
          // },
          {
            attrs: { id: 'festivals' },
          },
          {
            block: 'page',
            elem: 'title',
            elemMods: { size: 'xl' },
            mix: [
              { block: 'heading', mods: { caps: true, size: 'l' } },
              { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
            ],
            content: 'Партнерские фестивали'
          },
          {
            elem: 'partners'
          }
        ]
      },
      {
        elem: 'footer',
        content: [
          {
            elem: 'footer-content',
            content: [
              {
                block: 'page',
                elem: 'title',
                elemMods: { size: 'xl' },
                mix: [
                  { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
                  { block: 'font', mods: { family: 'helvetica-neue-condensed-bold', loaded: true } }
                ],
                content: 'Всего 200 участников'
              },
              {
                block: 'paragraph',
                mods: { align: 'center' },
                content: 'В клубе Артдок 100 мест для представителей индустрии и 100 мест для обладателей годовой карты «Партнер Артдокфеста». Хотите присоединиться — оставьте заявку.'
              },
              {
                block: 'paragraph',
                mods: { align: 'center' },
                content: {
                  block: 'button',
                  mix: { block: 'page-club', elem: 'get-card' },
                  mods: {
                    type: 'link',
                    size: 'xxl',
                    theme: 'artdoc-dark'
                  },
                  text: 'Оставить заявку',
                  url: 'mailto:media@artdocfest.com'
                }
              }
            ]
          }
        ]
      }
    ]
  });
