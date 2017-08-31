block('card-movie').elem('buy')(

  match( node => !node._schedules || !node._schedules.length ).def()(''),

  match( node => node._schedules && node._schedules.length ).replace()( node => {
    let type, size, text;
    switch ( node.elemMods.type ) {
      case 'button':
        type = 'link';
        size = 'l';
        text = 'Купить онлайн-билет';
        break;
      default: // checkbox
        type = 'button';
        size = 'm';
        text = 'Купить онлайн-билет';
        break;
    }



    return {
      block: node.elemMods.type || 'checkbox',
      mix: [{ block: node.block, elem: node.elem },  { block: 'font', mods: { family: 'helvetica-bold', loaded: true } }],
      mods: {
        type: type,
        width: 'available',
        size: size
      },
      url: (typeof node.attrs.href != 'undefined' ? node.attrs.href : '' ) + '#schedule',
      text: text
    }
  })

)
