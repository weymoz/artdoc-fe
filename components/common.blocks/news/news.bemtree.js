block('news').content()( ( node, ctx ) => {
    const news = ctx.news;

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
