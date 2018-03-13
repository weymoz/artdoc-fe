block('list').elem('term').elemMod('movie', 'actioncountries').content()(function(node) {
  return node._lang === 'en' ? 'Country of action' : 'Страна действия';
});
