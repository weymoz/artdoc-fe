block('page-club').replace()(function() {
    return [
      {
        elem: 'content',
        elemMods: { width: 'narrow' },
        content: [
          { block: 'breadcrumbs' },
          {
            elem: 'title',
            elemMods: { view: 'bold', size: 'l' },
            mix: { block: 'heading', mods: { 'has-dot': true, size: 'xxl' } },
            content: 'Клуб Артдок'
          },
          {
            block: 'paragraph',
            mods: { lead: true },
            content: 'Клуб Артдок — это закрытое сообщество профессионалов документального кино. В клуб входят представители киноиндустрии: директора и члены отборочных комиссий международных фестивалей, дистрибьюторы неигрового кино, сотрудники телеканалов и СМИ, отвечающие за покупку неигрового кино, руководители культурных клубов и центров, кинокритики и журналисты, пишущие для СМИ о неигровом кино.'
          },
          {
            elem: 'title',
            elemMods: { view: 'condensed-bold', size: 'xl' },
            mix: { block: 'heading', mods: { caps: true, size: 'l' } },
            content: 'Привилегии участников клуба'
          },
          {
            block: 'list',
            mods: {
              type: 'numeric'
            },
            content: [
              { elem: 'item', content: 'Бесплатный просмотр всех фильмов на сайте АртдокМедиа, кроме премьер текущего года' },
              { elem: 'item', content: 'Бесплатные билеты на любые онлайн-киносеансы АртдокМедиа' },
              { elem: 'item', content: 'Пригласительные билеты на церемонию открытия и закрытия фестиваля Артдокфест' },
              { elem: 'item', content: 'Посещение всех показов и мероприятий Артдокфеста в России в течение года' }              
            ]
          }
        ]
      },
      {
        elem: 'section',
        content: [
          {
            elem: 'content',
            elemMods: { width: 'narrow' },
            content: [
              {
                elem: 'title',
                elemMods: { view: 'condensed-bold', size: 'xl' },
                mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
                content: 'Вступить в клуб'
              },
              {
                block: 'paragraph',
                mods: { lead: true, align: 'center' },
                content: 'Вступление в клуб для представителей киноиндустрии бесплатно и осуществляется только по заявкам.'
              },
              {
                block: 'paragraph',
                mods: { align: 'center' },
                content: {
                  block: 'button',
                  mods: {
                    type: 'link',
                    size: 'xxl',
                    theme: 'artdoc-dark'
                  },
                  text: 'Оставить заявку',
                  url: 'mailto:media@artdocfest.com'
                }
              },            
              {
                elem: 'title',
                elemMods: { view: 'condensed-bold', size: 'xl' },
                mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
                content: 'Клубная карта'
              },
              {
                block: 'paragraph',
                mods: { align: 'center' },
                content: {
                  block: 'image',
                  // width: 88,
                  // height: 56,
                  url: 'assets/img/static/club_card_icon.svg'
                }
              },
              {
                block: 'paragraph',
                mods: { lead: true, align: 'center' },
                content: [
                  'Для вступления в клуб необязательно быть представителем киноиндустрии. Человек или организация, готовые оказать поддержку Артдокфесту может стать членом клуба Artdoc — для этого мы выпускаем 100 карт «Партнёр Артдокфеста» сроком на один год. Обладатели карты имеют все привелегии участников клуба. ',
                  {
                    block: 'link',
                    mods: { view: 'text' },
                    content: 'Напишите нам',
                    url: 'mailto:media@artdocfest.com'
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
        elemMods: { width: 'narrow' },
        content: [
          {
            elem: 'title',
            elemMods: { view: 'condensed-bold', size: 'xl' },
            mix: { block: 'heading', mods: { caps: true, size: 'l' } },
            content: 'Участники клуба АртДок'
          },
          {
            block: 'list',
            mods: {
              type: 'unstyled',
              view: 'club-performers'
            }
          },
          {
            block: 'paragraph',
            mods: { align: 'center' },
            content: {
              block: 'button',
              mods: {
                width: 'available',
                size: 'xxl'
              },
              text: 'Показать/Скрыть участников'
            }
          }
        ]
      },
      {
        elem: 'content',
        elemMods: { width: 'narrow' },
        content: [
          {
            elem: 'title',
            elemMods: { view: 'condensed-bold', size: 'xl' },
            mix: { block: 'heading', mods: { caps: true, size: 'l' } },
            content: 'Партнёрские фестивали'
          }
        ]
      },
      {
        elem: 'section',
        content: [
          {
            elem: 'content',
            elemMods: { width: 'narrow' },
            content: [
              {
                elem: 'title',
                elemMods: { view: 'condensed-bold', size: 'xl' },
                mix: { block: 'heading', mods: { caps: true, align: 'center', size: 'l' } },
                content: 'Всего 200 участников'
              },
              {
                block: 'paragraph',
                mods: { lead: true, align: 'center' },
                content: 'В клубе Артдок 100 мест для представителей индустрии и 100 мест для обладателей годовой карты «Партнер Артдокфеста». Хотите присоединиться — оставьте заявку.'
              },
              {
                block: 'paragraph',
                mods: { align: 'center' },
                content: {
                  block: 'button',
                  mods: {
                    type: 'link',
                    size: 'xxl',
                    theme: 'artdoc-dark'
                  },
                  text: 'Оставить заявку',
                  url: 'mailto:media@artdocfest.com'
                }
              },
            ]
          }
        ]
      }

    ]
  });
