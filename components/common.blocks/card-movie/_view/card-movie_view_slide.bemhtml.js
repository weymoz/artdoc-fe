block('card-movie').mod('view', 'slide')(

  content()( ( node, ctx ) => {

    // var options = {
    //   day: 'numeric',
    //   month: 'long'
    // };
    // let movieDate = new Date(ctx.sessions[0].time_gmt3);
    // let date = new Date( ctx.sessions[0].time_gmt3 * 1000 ).getDate() === new Date().getDate() ? 'Сегодня в кинотеатрах' : 'Ближайшая дата: ' + movieDate.toDateString();

    return applyNext( { 'ctx.content': {
        elem: 'content',
        content: [
          {
            elem: 'info',
            content: [
            {
              elem: 'icon',
            },
            {
              elem: 'title',
              mix: { block: 'font', mods: { family: 'helvetica-condensed', loaded: true } },
              content: 'Сегодня в кинотеатрах'
            }
            ]
          },
          {
            elem: 'cover',
            cover: [
              { elem: 'orig-name' },
              { elem: 'name' },
              {
                elem: 'list',
                elemMods: {
                  delimiter: 'vertical'
                },
                content: [
                  { elem: 'director' },
                  { elem: 'countries' },
                  { elem: 'year' }
                ]
              },
              { elem: 'description', elemMods: { 'short': true } },
              {
                block: 'button',
                mix: { block: 'card-movie', elem: 'buy-button' },
                mods: {
                  type: 'link'
                },
                text: 'Купить онлайн-билет',
                url: '/movie/' + node._code
              }
            ]
          },
        ]
      }
    } );
  })
);
