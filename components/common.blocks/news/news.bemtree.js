block('news').content()( ( node, ctx ) => {
    const news = ctx.news;

    return [
      {
        elem: 'content',
        content: news.map( (item, index) => {
          const title = [
            'Актуальный фильм',
            'АртдокМедиа',
            'Артдокфест',
            'Премия Лавр'
          ];
          return {
            block: 'news-block',
            mix: { block: node.block, elem: 'item' },
            title: title[ index ],
            news: item
          }
        })
      }
    ]
});
