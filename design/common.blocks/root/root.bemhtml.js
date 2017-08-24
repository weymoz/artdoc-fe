block( '*' ).mods()( node => {
  node.mods = node.extend( applyNext(), {
    size: node.mods.size || 'm',
    theme: node.mods.theme || 'artdoc'
  });

  return applyNext();
});