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
        {
          block: 'filters',
          data: this.data
        },
        _movies.map( item => {
          return {
            block: 'card-movie',
            mods: {
              view: 'list'
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
