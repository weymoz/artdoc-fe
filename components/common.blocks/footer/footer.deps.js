[{
  mustDeps: [
    { block: 'font', mods: { family: 'pt-mono' } },
    { block: 'font', mods: { family: 'helvetica-neue-condensed-bold' } }
  ]
},{
  shouldDeps: [
    { mods: { theme: '*' } },
    { block: 'logo', mods: { title: true } },
    { block: 'paragraph' },
    { block: 'heading', mods: { caps: true, size: 'xs', theme: 'artdoc-dark' } },
    { block: 'list', mods: { type: 'unstyled' } }
  ]
}]