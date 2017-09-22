block('news').content()( node => {
    const news = [
      {
        date: 1503923685,
        url: '//www.youtube.com/embed/jybw_0ecl0s',
        image: '//img.youtube.com/vi/jybw_0ecl0s/mqdefault.jpg',
        linkname: 'youtube.com',
        title: 'Запуск artdoc.media',
        content: '1 сентября по адресу artdoc.media начинает работу синематека документального кино на русском языке. В момент запуска в архиве доступна информация о более чем  1000 фильмов со всего мира.'
      },
      {
        date: 1503923685,
        url: '//www.rigaiff.lv/2017/ru/category/films-cat/artdocfest-riga/',
        linkname: 'rigaiff.lv',
        image: '/assets/img/news/riga.png',
        title: 'В Риге в четвертый раз пройдет латвийская сессия Artdocfest/RigaIFF.',
        content: 'Фильмом открытия станет картина "Слишком свободный человек". В программе Артдокфеста помимо показов фильмов, запланировано четыре круглых стола и питчинг независимых проектов для авторов из стран бывшего СССР.'
      },
      {
        date: 1503923685,
        url: '//www.lavrdoc.ru',
        image: '/assets/img/news/lavr.png',
        linkname: 'www.lavrdoc.ru',
        title: '1 сентября завершилось выдвижение работ на соискание Национальной премии "ЛАВР" - Лавровая ветвь',
        content: 'Второго сентября к работе приступает жюри пергого тура, и уже 10 октября будут объявлены работы прошедшие во второй тур конкурса.           В 2017 году на конкурс суммарно выдвинуто более 500 работ. '
      },
      {
        date: 1503923685,
        url: '//www.rigaiff.lv/2017/en/riga-iff-forum-2017/',
        //image: '//artdoc.media.com',
        linkname: 'rigaiff.lv',
        title: '8 сентября в Риге (Латвия) состоится питчинг независимых проектов для авторов из бывшего СССР. ',
        content: '"Артдокфест" отобрал 19 проектов , которые примут участие в питчинге Artdocfest/RigaIFF, организованном в сотрудничестве с авторитетным европейским индустриальным событием - Baltic Sea Forum for Documentaries . Питчинг пройдет в Риге с 7 по 10 сентября. Представляем проекты, отобранные на питчинг Artdocfest/RigaIFF, проходящий в сотрудничестве с Baltic Sea Forum for Documentaries'
      }
    ]

    return [
      {
        elem: 'content',
        content: news.map( item => {
          return {
            block: 'news-block',
            mix: { block: node.block, elem: 'item' },
            news: item
          }
        })
      }
    ]
});
