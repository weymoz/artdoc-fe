block('list').elem('term').elemMod('movie', 'studio').content()(function(node) {
  return node._lang === 'en' ? 'Film studio' : 'Студия'
});
