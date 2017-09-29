block('card-movie').elem('buy')(
  content()({
      block: 'paragraph',
      mix: { block: 'font', mods: { family: 'pt-mono' } },
      attrs: {
        style: 'background-color: #eee; color: #000; padding: 20px; box-sizing: border-box;'
      },
      content: {
        html: 'После одобрения правообладателем фильм&nbsp;будет доступен для просмотра'
      }
  }),

  match( node => node._status === 20 /*&& node._price && node._price.price === 0*/ ).replace()( node => {
    return {
      block: 'button',
      mix: { block: node.block, elem: node.elem },
      mods: {
        type: 'link',
        width: 'available',
        size: 'l',
        theme: node.mods.theme
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
        size = 'xl';
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
      mix: { block: node.block, elem: node.elem },
      mods: {
        type: type,
        size: size,
        theme: node.mods.theme
      },
      url: '/movie/' + node._code + '#schedule',
      text: text
    }
  })

)
