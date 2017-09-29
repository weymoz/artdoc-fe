[{
  shouldDeps: [
    { block: 'page' },
    { block: 'heading', mods: { size: 'xl' } },
    { block: 'button', mods: { togglable: 'check', theme: 'artdoc-dark' } },
    { block: 'radio-group', mods: { type: ['button', 'line'] } },        
    { block: 'form' },
    { block: 'form-field', mods: { type: [ 'checkbox', 'select' ] } },
    { block: 'checkbox' },
    { block: 'select', mods: { mode: 'check', type: 'suggest', 'has-clear': true } },
    { block: 'card-movie', mods: { view: 'list' } },
    { block: 'pagination' },
    { block: 'history' },
    { block: 'location' },
    { block: 'uri', elem: 'querystring' },
    { block: 'header' },
    { block: 'dropdown', mods: { 'nav-menu': true } }
  ]
},{
  tech: 'js',
  shouldDeps: [
    { tech: 'bemhtml', block: 'card-movie', mods: { view: 'list' } },
    { tech: 'bemhtml', block: 'pagination' },
    { tech: 'bemhtml', block: 'root' },
    { tech: 'bemhtml', block: 'text', mods: { plural: true } },
  ]
}]