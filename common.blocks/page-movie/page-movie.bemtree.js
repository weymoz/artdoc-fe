block('page-movie')
  .content()(function() {

    this.data.api = this.data.api || {
      id: 0,
      code: null,
      orig_name: null,
      rating: 0,
      year: 0,
      duration: 0,
      tvpg: null,
      action_years: null,
      tags: null,
      trailer: null,
      length_type: 0,
      cover_id: 0,
      fin_type: 0,
      rights_owner: null,
      status: 0,
      created_at: 1499342945,
      updated_at: 1499848020
    };

    const {
      id,
      code,
      orig_name,
      rating,
      year,
      duration,
      tvpg,
      action_years,
      tags,
      trailer,
      length_type,
      cover_id,
      fin_type,
      rights_owner,
      status,
      created_at,
      updated_at
    } = this.data.api;

    return [
      orig_name ? {
        block: 'name',
        tag: 'h2',
        content: orig_name
      } : '',
      year ? {
        block: 'year',
        content: 'Премьера: ' + year
      } : '',
      tvpg ? {
        block: 'tvpg',
        content: 'Рейтинг: ' + tvpg
      } : '',
      rating ? {
        block: 'rating',
        content: 'Рейтинг: ' + rating + ' / 10'
      } : '',
      tags ? {
        block: 'tags',
        content: tags.split(/\s*,\s*/).map( (tag, index, tags) => {
          return [
            {
              block: 'link',
              url: '/tag=' + tag,
              content: '#' + tag
            }
          ];
        } )
      } : '',
      trailer ? {
        block: 'trailer',
        content: [
          {
            block: 'link',
            url: trailer,
            content: trailer
          }
        ]
      } : '',
      {
        block: 'table',
        tag: 'table',
        attrs: {
          border: 1
        },
        content: [
          {
            elem: 'row',
            tag: 'tr',
            content: [ 0, 1, 2, 3, 4, 5, 6 ].map( day => {
              return {
                elem: 'cell',
                tag: 'td',
                content: {
                  block: 'link',
                  url: '/movie/1/2017-07-' + (new Date().getDate() + day),
                  content: (new Date().getDate() + day) + '.0' + (new Date().getMonth() + 1)
                }
              }
            } )
          },
        ]
      },
      this.data.params.date && {
        block: 'data',
        content: [
          'You select this movie on ' + this.data.params.date + '. ',
          {
            block: 'link',
            url: '/movie/' + this.data.params.id,
            content: 'Unselect'
          }
        ]
      },
      {
        block: 'link',
        url: '/schedule',
        content: 'Go to schedule'
      },
      {
        tag: 'br'
      },
      this.data.params.date && {
        block: 'link',
        url: '/order?movie=' + this.data.params.id + '&date=' + this.data.params.date,
        content: 'Got to order'
      },
      {
        tag: 'br'
      },
      {
        block: 'link',
        url: '/',
        content: 'Go to index'
      }
    ];
  });
