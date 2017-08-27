block('news').content()(function() {
    this.ctx.items = [
      {
        date: 1491177600,
        url: 'https://youtube.com',
        image: 'http://artdoc.media.com',
        linkname: 'youtube.com',
        title: 'На "Артдокфесте" победил фильм о борьбе за свободу',
        content: 'Гран-при получила картина Александра Кузнецова «Освобождение: инструкция по применению». Фильм-наблюдение за жизнью в психоневрологических учреждениях…'
      },
      {
        date: 1489449600,
        url: 'http://artdocfest.com',
        linkname: 'artdocfest.com',
        title: 'Трансляция Церемонии Закрытия Артдокфест на телеканале Дождь',
        content: 'С первого года существования Премии «Лавровая ветвь», а затем  и Артдокфеста,по ТВ транслируется телевизионная версия церемонии закрытия. Сначала это был канал РТР, ныне Россия-1, затем СТС и последние годы телеканал Дождь. Трансляция 2016 года состоится 16 декабря (пятница) в 20 часов. После она будет доступна на сайтах фестиваля и Премии Лавр. В этом году поступило 50 заявок на участие в Питчинге…'
      },
      {
        date: 1488153600,
        url: 'https://tvrain.ru',
        image: 'http://artdoc.media.com',
        linkname: 'tvrain.ru',
        title: 'Трансляция церемонии закрытия',
        content: 'Начало трансляции 9 декабря в 19.00'
      },
      {
        date: 1489449600,
        url: 'http://artdocfest.com',
        image: 'http://artdoc.media.com',
        linkname: 'artdocfest.com',
        title: 'Питчинг Артдокфест / Riga IFF',
        content: 'В 2017 году Артдокфест возрождает свой питчинг проектов документального кино. Но на новом месте, и в новом формате. И теперь только для авторов из стран бывшего СССР.'
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
