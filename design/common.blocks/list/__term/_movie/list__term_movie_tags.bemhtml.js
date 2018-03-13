block('list').elem('term').elemMod('movie', 'tags').content()(function(node) {
  return node._lang === 'en' ? 'Tags' : 'Теги';
});
