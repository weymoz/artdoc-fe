block('card-movie').elem('buy')(

  match( node => !node._schedules || !node._schedules.length ).def()(''),

  match( node => node._schedules && node._schedules.length ).replace()( node => {
    let type, size, text;
    switch ( node.elemMods.type ) {
      case 'button':
        type = 'link';
        size = 'l';
        text = 'Купить билет на онлайн-сеанс';
        break;
      default: // checkbox
        type = 'button';
        size = 'm';
        text = 'Купить онлайн-билет';
        break;
    }

    return {
      block: node.elemMods.type || 'checkbox',
      mix: { block: node.block, elem: node.elem },
      mods: {
        type: type,
        width: 'available',
        size: size
      },
      url: '#schedule',
      text: text
    }
  })

)