module.exports = {
  host: {
    baseURL: process.env.API || 'http://artdoc.media:9999',
    auth: {
      username: process.env.USER || 'artdocmedia',
      password: process.env.PASS || 'dev'
    }
  },
  promo: {
    meduza: [
      'under_the_sun_1504645200_15047172001504079120',
      'under_the_sun_1504645200_15047352001504079120',
      'under_the_sun_1504645200_15047460001504079120',
      'kruzenshtern__1504731600_15047748001504083027',
      'kruzenshtern__1504731600_15047964001504083027'
    ]
  },
  staticFolder: 'static',
  defaultPort: process.env.PORT || 3000,
  cacheTTL: 30000,
  sessionSecret: 'Exegi_monumentum_aere_perennius'
};
