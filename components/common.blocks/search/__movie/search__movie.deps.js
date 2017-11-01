[{
  block: 'search',
  elem: 'movie',
  mod: 'view',
  val: 'list',
  shouldDeps: [
    { block: 'card-movie', mods: { view: [ 'list', 'text' ] } }
  ]
},{
  tech: 'js',
  shouldDeps: [
    { tech: 'bemhtml', block: 'card-movie', mods: { view: 'text' } }
  ]  
}]
