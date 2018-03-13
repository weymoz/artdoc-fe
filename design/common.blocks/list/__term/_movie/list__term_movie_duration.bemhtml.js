block('list').elem('term').elemMod('movie', 'duration').content()(function(node) {
  return node._lang === 'en' ? 'Duration' : 'Продолжительность';
});
