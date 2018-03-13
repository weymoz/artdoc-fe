block('list').elem('term').elemMod('movie', 'director').content()(function(node) {
  return node._lang === 'en' ? 'Director' : 'Режиссёр';
});
