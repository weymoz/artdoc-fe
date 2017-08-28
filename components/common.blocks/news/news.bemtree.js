block('news').content()(function() {
    this.ctx.items = [
      {
        date: 1503923685,
        url: 'http://artdocfest.com/news/346',
        //image: 'http://artdoc.media.com',
        linkname: 'artdocfest.com',
        title: 'Запуск artdoc.media',
        content: '1 сентября по адресу artdoc.media начинает работу синематека документального кино на русском языке. В момент запуска в архиве доступна информация о более чем  1000 фильмов со всего мира.'
      },
      {
        date: 1503923685,
        url: 'http://www.rigaiff.lv/2017/ru/category/films-cat/artdocfest-riga/',
        linkname: 'rigaiff.lv',
        title: 'В Риге в четвертый раз пройдет латвийская сессия Artdocfest/RigaIFF.',
        content: 'Фильмом открытия станет картина "Слишком свободный человек". В программе Артдокфеста помимо показов фильмов, запланировано четыре круглых стола и питчинг независимых проектов для авторов из стран бывшего СССР.'
      },
      {
        date: 1503923685,
        url: 'http://www.lavrdoc.ru',
        //image: 'http://artdoc.media.com',
        linkname: 'www.lavrdoc.ru',
        title: '1 сентября завершается выдвижение работ на соискание Национальной премии "ЛАВР" - Лавровая ветвь',
        content: 'Второго сентября к работе приступает жюри пергого тура, и уже 10 октября будут объявлены работы прошедшие во второй тур конкурса.           В 2017 году на конкурс суммарно выдвинуто более 450 работ. '
      },
      {
        date: 1503923685,
        url: 'http://artdocfest.com/news/345',
        //image: 'http://artdoc.media.com',
        linkname: 'artdocfest.com',
        title: '8 сентября в Риге (Латвия) состоится питчинг независимых проектов для авторов из бывшего СССР. ',
        content: '"Артдокфест" отобрал 19 проектов , которые примут участие в питчинге Artdocfest/RigaIFF, организованном в сотрудничестве с авторитетным европейским индустриальным событием - Baltic Sea Forum for Documentaries . Питчинг пройдет в Риге с 7 по 10 сентября. Представляем проекты, отобранные на питчинг Artdocfest/RigaIFF, проходящий в сотрудничестве с Baltic Sea Forum for Documentaries'
      }
    ]

    return [
    {
      elem: 'header',
      content: [
      {
          elem: 'title',
          elemMods: {
          size: 'xl'
          },
          mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
          content: 'Новости и события'
      },
      {
        elem: 'control',
        content:[
        {
          block: 'button',
          mix: { block: 'news', elem: 'prev'},
          mods: {
            disabled: true
          }
        },
        {
          block: 'button',
          mix: { block: 'news', elem: 'next'},
          mods: {
            disabled: true
          }
        }
        ]
      },
      ]
    },
    {
      elem: 'content',
      content: this.ctx.items.map( item => {
        return {
          elem: 'item',
          content: [
            {
              block: 'news-block',
              title: item.title,
              content: item.content,
              date: item.date,
              url: item.url,
              linkname: item.linkname,
              image: item.image
            }
          ]
        }
      })
    }
  ]
});
