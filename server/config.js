module.exports = {
  host: {
    baseURL: process.env.API || 'http://artdoc.media:9999',
    auth: {
      username: process.env.USER || 'artdocmedia',
      password: process.env.PASS || 'dev'
    }
  },
  promo: [
    {
      name: 'meduza',                    // wait link with url: /movie/:name?promo=meduza
      cookies: {
        fire_in_the: {                   // then will set this cookies
          value: 'hole',
          expire: 1504796400            // with this experation date
        },
        foo: {
          value: 'bar',
          maxAge: 900000                 // or maxAge
        } 
      },                                  
      data: [
        238,
        239,
        240,
        241,
        242
      ]
    }
  ],
  site: {
    title: 'Artdoc.Media',
    meta: {
      description: 'Артдокмедиа — это архив документального кино, независимого и актуального контента, в основном снятого на территории бывшего СССР с начала 2000-х годов. Ежедневно в кинозале 5 сеансов, с обсуждением фильма с авторами.',
      og: {
        siteName: 'Artdoc.Media',
        image: '/assets/img/meta/artdocmedia.jpeg'
      },
    }
  },
  staticFolder: 'static',
  defaultPort: process.env.PORT || 3000,
  cacheTTL: 30000,
  sessionSecret: 'Exegi_monumentum_aere_perennius'
};
