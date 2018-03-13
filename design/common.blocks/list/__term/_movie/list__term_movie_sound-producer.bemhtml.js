block('list').elem('term').elemMod('movie', 'sound-producer').content()(function(node) {
  return node._lang === 'en' ? 'Soundman' : 'Звукорежисёр'
});
