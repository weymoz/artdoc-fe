modules.define('card-movie__buy', ['i-bem-dom', 'checkbox'], function(provide, bemDom, Checkbox) {

provide(bemDom.declElem('card-movie', 'buy', {
  onSetMod: {
    js: {
      inited: function() {
        if ( this.hasMod( 'type', 'checkbox' ) ) {
          this._toggler = this.findMixedBlock( Checkbox );
          this._toggler._tickets = this._elem('tickets');
          this._toggler._domEvents().on( 'click', this.toggleTickets, this._toggler )
        }
      }
    }
  },

  toggleTickets: function() {
    console.log( this.hasMod('checked') );
  }
}));

});
