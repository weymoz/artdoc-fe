block('list').elem('term').elemMod('movie', 'genres').content()(function(node) {
  return node._lang === 'en' ? 'Genre' : 'Жанр';
});
