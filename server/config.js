module.exports = {
  host: {
    baseURL: process.env.API || 'http://artdoc.media:9999',
  },
  promo: [
    {
      name: 'meduza',           // wait link with url: /movie/:name?promo=meduza
      cookies: {
        meduza: {               // then will set this cookies
          value: 'promo',
          expire: 1516849200    // with this experation date
        }
      },
      data: [
        677
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
      social: {
        'facebook'  : '//www.facebook.com/artdoc.media/',
        'vkontakte' : '//vk.com/artdoc.media',
        'youtube'   : '//www.youtube.com/channel/UCmX4ayziG0kLmdsvHtMcfpA',
        'instagram' : '//www.instagram.com/artdocfest/'
      }
    }
  },
  staticFolder: 'static',
  defaultPort: process.env.PORT || 3000,
  cacheTTL: 30000,
  sessionSecret: 'Exegi_monumentum_aere_perennius'
};
