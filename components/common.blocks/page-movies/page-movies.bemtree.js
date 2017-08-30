block('page-movies').replace()(function() {

  const _movies = this.data.api;

  return [
    {
      elem: 'content',
      content: [
        {
          elem: 'title',
          elemMods: {
            size: 'xl'
          },
          content: this.data.title
        },
        _movies.map( item => {
          return {
            block: 'card-movie',
            mods: {
              view: 'schedule'
            },
            movie: item
          }
        } )
      ]
    },
    { block: 'pagination', params: this.data.pagination },
    {
      block: 'section',
      content: [
      {
        block: 'club-footer',
        mix: { block: 'page', elem: 'club' }
      }
      ]
    }
  ];
});
