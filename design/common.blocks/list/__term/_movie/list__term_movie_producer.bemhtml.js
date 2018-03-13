block('list').elem('term').elemMod('movie', 'producer').content()(function(node) {
  return node._lang === 'en' ? 'Producer' : 'Продюсер';
});
