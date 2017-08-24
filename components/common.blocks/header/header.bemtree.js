block('header').content()(function() {
  return [
    {
      block: 'logo',
      mix: { block: 'header', elem: 'logo' }
    },
    {
      block: 'logo',
      mods: { title: true },
      mix: { block: 'header', elem: 'title' }
    },
    {
      block: 'nav-menu',
      mix: { block: 'header', elem: 'menu' }
    },
/*
    {
      block: 'search',
      mix: { block: 'header', elem: 'search' },
      content: [
        {
          block: 'button',
          mods: {
            view: 'plain',
            size: 'xxl'
          },
          icon: {
            block: 'icon',
            mods: {
              symbol: 'search',
              size: 'xxl'
            },
            url: 'https://png.icons8.com/search/color/24'
          },
          text: 'Поиск'
        },
      ]
    },
    {
      elem: 'lang',
      content: {
        block: 'button',
        mods: {
          view: 'plain',
          size: 'xxl'
        },
        text: 'En'
      }
    },
    {
      elem: 'social',
      content: [
        {
          block: 'button',
          mods: {
            type: 'link',
            view: 'plain',
            size: 'xxl'
          },
          icon: {
            block: 'icon',
            mods: {
              symbol: 'facebook',
              size: 'xxl'
            },
            url: 'https://png.icons8.com/facebook/color/24'
          },
          url: '//google.com'
        },
        {
          block: 'button',
          mods: {
            type: 'link',
            view: 'plain',
            size: 'xxl'
          },
          icon: {
            block: 'icon',
            mods: {
              symbol: 'facebook',
              size: 'xxl'
            },
            url: 'https://png.icons8.com/youtube/color/24'
          },
          url: '//google.com'
        },
        {
          block: 'button',
          mods: {
            type: 'link',
            view: 'plain',
            size: 'xxl'
          },
          icon: {
            block: 'icon',
            mods: {
              symbol: 'facebook',
              size: 'xxl'
            },
            url: 'https://png.icons8.com/instagram/color/24'
          },
          url: '//google.com'
        }
      ]
    },
    {
      elem: 'user',
      content: {
        block: 'button',
        mods: {
          type: 'link',
          view: 'plain',
          size: 'xxl'
        },
        icon: {
          block: 'icon',
          mods: {
            symbol: 'user',
            size: 'xxl'
          },
          url: 'https://png.icons8.com/user/color/24'
        },
        url: '/login'
      }
    }
*/
  ];
});
