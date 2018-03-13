block('list').elem('term').elemMod('movie', 'year').content()(function(node) {
  return node._lang === 'en' ? 'Year of release' : 'Год производства';
});
