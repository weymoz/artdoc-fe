module.exports = {
  host: {
    baseURL: 'http://dev.artdoc.media:9999',
    auth: {
      username: 'artdocmedia',
      password: 'dev'
    }
  },
  /*
  route: [
    {
      page: 'index',
      content: [
        {
          page: 'cinema',
          request: '/api/movie/',
          content: [
            {
              page: 'category',
              params: ':category',
              request: '???',
              content: [
                {
                  page: 'movie',
                  params: ':name',
                  request: '/api/movie/?expand=schedules,sessions&code=' + req.params.name,
                  query: [
                    {
                      page: 'play',
                      query: [ 'id', 'hash', 'sess_id' ],
                      request: '/cinema/release/?id=' + req.query.id + '&hash=' + req.query.hash + '&sess_id=' + req.query.sess_id,
                    },
                    {
                      page: 'order',
                      query: [ 'id' ],
                      request: '/api/session/?expand=movie&id=' + req.query.id
                    },
                  ]
                }
              ]
            },
          ]
        },
        {
          page: 'schedule',
          request: '/api/schedule/?expand=sessions,movie&sort=date_gmt3'
        },
        {
          page: 'thanks',
          query: [ 'code' ],
          request: '/api/movie/?code=' + req.query.code
        }
      ]
    }
  ],
  */
  staticFolder: 'static',
  defaultPort: 3000,
  cacheTTL: 30000,
  sessionSecret: 'REPLACE_ME_WITH_RANDOM_STRING'
};
