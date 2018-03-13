block('list').elem('term').elemMod('movie', 'operator').content()(function(node) {
  return node._lang === 'en' ? 'Cameraman' : 'Оператор';
});
