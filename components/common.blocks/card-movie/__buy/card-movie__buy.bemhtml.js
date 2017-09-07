block('card-movie').elem('buy')(

  content()({
      block: 'paragraph',
      mix: { block: 'font', mods: { family: 'pt-mono' } },
      attrs: {
        style: 'padding: 20px; background-color: #eee; color: #000;'
      },
      content: {
        html: 'После одобрения правообладателем фильм&nbsp;будет доступен для просмотра'
      }
  }),

  match( node => node._status === 20 /*&& node._price && node._price.price === 0*/ ).replace()( node => {
    return {
      block: 'button',
      mix: [{ block: node.block, elem: node.elem },  { block: 'font', mods: { family: 'helvetica-bold', loaded: true } }],
      mods: {
        type: 'link',
        width: 'available',
        size: 'l'
      },
      url: '/movie/' + node._code + '/watch',
      text: 'Смотреть бесплатно'
    }    
  } ),

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
