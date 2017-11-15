block( '*' ).mods()( node => {
  node.mods = node.extend( applyNext(), {
    size: node.mods.size || 'm',
    theme: node.mods.theme || node.defaultTheme || 'artdoc'
  });
  node.defaultTheme = node.mods.theme;

  return applyNext();
});