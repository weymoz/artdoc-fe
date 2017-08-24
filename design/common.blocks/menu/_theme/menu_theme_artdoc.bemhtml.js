block('menu').mod('theme', 'artdoc').elem('item')(
  addElemMods()( node => {
    return {
      size: node.mods.size || 'm',
      theme: node.mods.theme || 'artdoc'
    }
  } )  
);
