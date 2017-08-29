block('page-about').content()(function() {
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
              block: 'page-about', elem: 'main-title'
            },
            {
             block: 'font', mods: { family: 'helvetica-bold', loaded: true }
            }],
            mods: {
              size: 'xl'
            },
            content: 'О проекте'
          },
          {
            block: 'paragraph',
            content: 'АртдокМедиа — это архив документального кино, снятого в странах бывшего СССР с начала 2000-х годов. Каталог устроен по классическому принципу синематеки: база с информацией о фильмах, фотографиями, трейлерами, доступу к просмотру, подборками по темам и ретроспективами.'
          },
          {
            block: 'paragraph',
            content: 'Большая часть нашей коллекции состоит из фильмов, которые сняты без государственного участия, а значит не находятся в архивах и фондовых хранилищах. Немало студий, производивших эти фильмы, прекратили своё существование. Поэтому для многих фильмов наш сайт является единственным местом, сохраняющим эти картины для зрителя и для истории.'
          },
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
            content: 'Онлайн-киносеансы'
          },
          {
            block: 'paragraph',
            content: [
            'С 2007 по 2013 годы Артдокфест проходил в московском кинотеатре «Художественный». Этого зала уже не существует в прежнем виде, и мы хотели бы сохранить о нём память.',
            { block: 'link',
              url: '/cinema',
              mix: { block: 'page-about', elem: 'link' },
              content: '     Киносеансы'
            },
            '  – это виртуальные онлайн-показы, которые полностью повторяют принцип кинотеатрального проката фильмов. Для просмотра нужно купить билет, выбрав день, время и место в зале. На каждый сеанс продаётся 605 билетов — ровно столько было в кинотеатра «Художественный». После просмотра мы часто проводим онлайн-обсуждения картины с её автором и другими зрителями. Все фильмы демонстрируются на русском языке с возможностью включения субтитров.'
            ]
          },
          {
            block: 'paragraph',
            content: 'В репертуаре киносеансов, как правило, новые документальные фильмы, которые часто не доходят до большинства кинотеатров в городах России и в странах бывшего СССР. Для большинства авторов прокат их работ на нашем сайте — единственная возможность компенсировать часть затрат на производство фильма, а значит, и продолжить снимать кино.'
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
            content: 'Рейтинг фильмов'
          },
          {
            block: 'paragraph',
            mix: { block: 'page-about', elem: 'rate-title' },
            content: 'Рейтинг фильмов составлен по результатам работы Артдокфеста и Национальной премии «Лавр» («Лавровая ветвь»). Для части картин дополнительно используется экспертная оценка кураторов АртдокМедиа.'
          },
          {
            elem: 'rate-list',
            content: [
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '10'
              },
              'Гран-при Артдокфеста и главных мировых кинофестивалей. Классика документального кино.'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '9'
              },
              'Фильмы–призеры Артдокфеста и победители премии «Лавр».'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '8'
              },
              'Участники конкурса Артдокфеста, программы «от А до А» и финалисты премии «Лавр».'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '7'
              },
              'Программа «Среда Артдокфеста» и второй тур премии «Лавр».'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '6'
              },
              'Фильмы–участники внеконкурсных программ Артдокфест.'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '5'
              },
              'Фильмы–участники международных фестивалей.'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '4'
              },
              'Фильмы–участники других фестивалей в России.'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '3'
              },
              'Фильмы, которые были выдвинуты на премию «Лавр» профессиональными организациями.'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '2'
              },
              'Фильмы, которые были выдвинуты на премию «Лавр» их создателями.'
              ]
            },
            {
              block: 'rate-card',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content:[
              {
                elem: 'counter',
                content: '1'
              },
              'Фильмы без экспертной оценки.'
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
        block: 'title',
        mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
        mods: {
          size: 'l'
        },
        content: 'Рейтинг фильмов'
      },
      {
        elem: 'info',
        content: [
          {
            elem: 'aside',
            content: [
            {
              block: 'image',
              // url: '../design/assets/img/static/'
              mix: { block: 'page-about', elem: 'filmmaker' }
            },
            {
              block: 'description',
              mix: { block: 'font', mods: { family: 'pt-mono', loaded: true } },
              content: [
                {
                  elem: 'name',
                  content: 'Виталий Манский'
                },
                {
                  elem: 'role',
                  content: 'Президент Артдокфест, режиссер и продюсер'
                }
              ]
            }
            ]
          },
          {
            elem: 'footer-content',
            content: [
            {
              block: 'paragraph',
              content: 'АртдокМедиа — это логичное продолжение фестиваля Артдокфест. Более 10 лет назад мы почувствовали необходимость создания площадки для встречи яркого, актуального и талантливого взгляда на нашу с вами жизнь с зрительской аудиторий в реальном мире. Сегодня мы понимаем необходимость переноса его ещё и в мир виртуальный.'
            },
            {
              block: 'paragraph',
              content: 'Сайт АртдокМедиа — это во многом вынужденный шаг. Это шаг на опережение действий властей некоторых пост-советских стран. Властей, которые сужают пространство свободной мысли до грани неспособности выживания. Цензура явная и скрытая. Давление, переходящее в гонение — это ещё один аргумент для создания площадки для независимого документального кино в интернете.'
            },
            {
              block: 'paragraph',
              content: 'Многие говорят мне: «Зачем тебе это надо? Сохранять и развивать — это дело государства». Однако те люди, которые сегодня выступают от лица некоторых государств, занимаются принципиально другими вопросами. На мой взгляд, противостоять этому нужно не только с плакатами в руках на митингах, но и конкретными делами — сохранять и развивать летопись нашего как всегда смутного времени.'
            }
            ]
          }
        ]
      }
      ]
    }
    ];
});
