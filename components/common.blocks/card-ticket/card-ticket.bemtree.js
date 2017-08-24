block('card-ticket')(

  match( ( node, ctx ) => !ctx.ticket ).def()( '' )

);
