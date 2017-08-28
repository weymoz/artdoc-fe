block('card-movie').elem('content')(
  match( node => node.elemMods.type === 'link' && node._url )(
    tag()('a'),
    addMix()( () => { return { block: 'link' } } ),
    addAttrs()( node => {

      // remove url for nested elements
      let url = node._url;
      delete node._url;

      return {
        href: url
      }
    } )
  )
)