block('list').elem('term').elemMod('movie', 'language').content()(function(node) {
  return node._lang === 'en' ? 'Language' : 'Язык фильма';
});
