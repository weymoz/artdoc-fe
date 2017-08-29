block('card-ticket').elem('city')(

  match( node => !node._city || !node._city.name ).def()(''),

  content()( node => node._city.name )

)