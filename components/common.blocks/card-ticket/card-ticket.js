modules.define('card-ticket', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        
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

  setDateTime: function( timestamp ) {
    const datetime = new Date( ( timestamp + this._timeZoneOffset ) * 1000 );
    const time = datetime.toLocaleString( 'ru', { hour: 'numeric', minute: 'numeric' } );
    const date = datetime.toLocaleString( 'ru', { day: 'numeric', month: 'long' } );
    
    bemDom.update( this._elem('user-time').domElem, time );
    bemDom.update( this._elem('user-date').domElem, date );
    this.domElem.href = '' + window.location.href + '?code=' + this.params.ticket.code + '&tz=' + this._timeZoneOffset;
  },


}));

});