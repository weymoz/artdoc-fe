block('card-movie').elem('buy')(

  match( node => !node._schedules || !node._schedules.length ).def()(''),

  match( node => node._schedules && node._schedules.length ).replace()( node => {
    const size = node.elemMods.size || 'm';

    return [
      {
        block: 'button',
        mix: { block: node.block, elem: node.elem },
        mods: {
          type: 'link',
          style: 'order',
          width: 'available',
          size: size
        },
        url: '#schedule',
        // icon: {
        //   block: 'icon',
        //   mods: {
        //     symbol: 'camera',
        //     size: 'l'
        //   },
        //   url: 'https://png.icons8.com/video-call-filled/ios7/32'
        // },
        text: size === 'm'
          ? 'Купить онлайн-билет'
          : 'Купить билет на онлайн-сеанс'
      }
    ]
  })

)