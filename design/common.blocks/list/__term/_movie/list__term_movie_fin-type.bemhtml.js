block('list').elem('term').elemMod('movie', 'fin-type').content()(function(node) {
  return node._lang === 'en' ? 'Funding' : 'Финансирование';
});
