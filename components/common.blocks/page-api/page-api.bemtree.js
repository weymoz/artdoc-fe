block('page').replace()(function() {
  return JSON.stringify( this.data.api, null, 2 );
});
