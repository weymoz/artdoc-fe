block('list').elem('term').elemMod('movie', 'subs').content()(function(node) {
  return node._lang === 'en' ? 'Subtitles' : 'Субтитры';
});
