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
      cookie: {
        fire_in_the: {                   // then will set this cookies
          value: 'hole',
          expire: 1504796400            // with this experation date
        },
        foo: {
          value: 'bar',
          maxAge: 900000                 // or maxAge
        } 
      },                                  
      sessionCode: [
        'under_the_sun_1504645200_15047172001504079120',
        'under_the_sun_1504645200_15047352001504079120',
        'under_the_sun_1504645200_15047460001504079120',
        'kruzenshtern__1504731600_15047748001504083027',
        'kruzenshtern__1504731600_15047964001504083027'
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
