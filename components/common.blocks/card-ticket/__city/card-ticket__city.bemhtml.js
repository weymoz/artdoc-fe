block('card-ticket').elem('city')(

  match( node => !node._city || !node._city.name ).def()(''),

  addMix()({ block: 'font', mods: { family: 'helvetica-condensed', loaded: true }  }),

  content()( node => node._city.name )

)
