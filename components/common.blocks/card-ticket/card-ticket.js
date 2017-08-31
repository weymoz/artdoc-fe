modules.define('card-ticket', ['i-bem-dom', 'link'], function(provide, bemDom, Link) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        this._timeZoneOffset = 0;
      }
    }
  },

  // set new timezone offset (in seconds)
  setTimeZone: function( offset = 0 ) {
    // Fix serverside timezone offset
    const userTimeZoneOffset = new Date().getTimezoneOffset() * 60;
    this._timeZoneOffset = ( userTimeZoneOffset + offset * 60 );
    return this;
  },

  getTimezoneOffset: function() {
    return ( this._timeZoneOffset - ( new Date().getTimezoneOffset() * 60 ) ) / 60;
  },

  setDateTime: function( timestamp ) {
    const datetime = new Date( ( timestamp + this._timeZoneOffset ) * 1000 );
    const time = datetime.toLocaleString( 'ru', { hour: 'numeric', minute: 'numeric' } );
    const date = datetime.toLocaleString( 'ru', { day: 'numeric', month: 'long' } );
    
    bemDom.update( this._elem('user-time').domElem, time );
    bemDom.update( this._elem('user-date').domElem, date );

    const link = this.findMixedBlock( Link );
    console.log( this.getTimezoneOffset() );
    if ( link ) {
      link.setUrl( window.location.href + '?code=' + this.params.ticket.code + '&tz=' + this.getTimezoneOffset() );
    }
  },


}));

});