block('page-club').content()(function() {
    return[
    {
      elem: 'header',
      content: [
      {
        block: 'breadcrumbs'
      }
      ]
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'text-block',
          content: [
          {
            block: 'title',
            mix: [
            {
              block: 'page-club', elem: 'main-title'
            },
            {
             block: 'font', mods: { family: 'helvetica-bold', loaded: true }
            }],
            mods: {
              size: 'xl'
            },
            content: 'Клуб Артдок'
          },
          {
            block: 'paragraph',
            content: 'Клуб Артдок — это закрытое сообщество профессионалов документального кино. В клуб входят представители киноиндустрии: директора и члены отборочных комиссий международных фестивалей, дистрибьюторы неигрового кино, сотрудники телеканалов и СМИ, отвечающие за покупку неигрового кино, руководители культурных клубов и центров, кинокритики и журналисты, пишущие для СМИ о неигровом кино.'
          }
        ]},
        {
          elem: 'text-block',
          content: [
          {
            block: 'title',
            mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
            mods: {
              size: 'l'
            },
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
              content:[
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
        ]}
      ]
    },
    {
      elem: 'footer',
      content: [
      {
        elem: 'text-block',
        mix: { block: 'page-club', elem: 'footer-content' },
        content: [
          {
            block: 'title',
            mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
            mods: {
              size: 'l'
            },
            content: 'Вступить в клуб'
          },
          {
            block: 'paragraph',
            content: 'Вступление в клуб для представителей киноиндустрии бесплатно и осуществляется только по заявкам.'
          },
          {
            block: 'button',
            mix: {block: 'page-club', elem: 'get-card'},
            mods: {
              type: 'link',
              theme: 'artdoc'
            },
            text: 'Оставить заявку',
            url: ''
          },
      ]
      },
      {
        elem: 'text-block',
        mix: { block: 'page-club', elem: 'footer-content' },
        content: [
          {
            block: 'title',
            mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
            mods: {
              size: 'l'
            },
            content: 'Клубная карта'
          },
          {
            elem: 'image',
            mix: { block: 'page-club', elem: 'card-image' }
          },
          {
            block: 'paragraph',
            content: [
            'Для вступления в клуб необязательно быть представителем киноиндустрии. Любой желающий может стать членом клуба Artdoc — для этого мы выпускаем 100 карт «Партнёр Артдокфеста» сроком на один год. Обладатели карты имеют все привелегии участников клуба. ',
            { block: 'link',
              url: '',
              mix: { block: 'page-club', elem: 'link' },
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
      elem: 'content',
      content: [
        {
          elem: 'text-block',
          content: [
            {
              block: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              mods: {
                size: 'l'
              },
              content: 'Аккредитованные кинокритики'
            },
            {
             elem: 'party',
            },
            {
              elem: 'party',
              elemMods: {
                hide: true
              }
            },
            {
              block: 'button',
              mix: { block: 'page-club', elem: 'make-party' },
              text: 'Показать ещё'
            }
          ]
        },
        {
          elem: 'text-block',
          content: [
            {
              block: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              mods: {
                size: 'l'
              },
              content: 'Партнерские фестивали'
            },
            {
              elem: 'partners'
            }
          ]
        }
      ]
    },
    {
      elem: 'footer',
      content: [
        {
          elem: 'text-block',
          mix: { block: 'page-club', elem: 'footer-content' },
          content: [
            {
              block: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              mods: {
                size: 'l'
              },
              content: 'Всего 200 участников'
            },
              {
              block: 'paragraph',
              content: 'В клубе Артдок 100 мест для представителей индустрии и 100 мест для обладателей годовой карты «Партнер Артдокфеста». Хотите присоединиться — оставьте заявку.'
            },
            {
              block: 'button',
              mix: { block: 'page-club', elem: 'get-card' },
              mods: {
                type: 'link',
                theme: 'artdoc'
              },
              text: 'Оставить заявку',
              url: ''
            }
          ]
        }
      ]
    }
    ]
  });
