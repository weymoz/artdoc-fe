block('list').elem('term').elemMod('movie', 'categories').content()(function(node) {
  return node._lang === 'en' ? 'Theme' : 'Тема';
});
