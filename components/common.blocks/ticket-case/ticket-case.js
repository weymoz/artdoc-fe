/**
 * @module ticket-case
 */

modules.define('ticket-case',
  ['i-bem-dom', 'radio-group', 'select', 'card-ticket'],
  function(provide, bemDom, radioGroup, Select, Ticket) {

/**
 * @exports
 * @class ticket-case
 * @bem
 */
provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        var theTabs = this;

        this._boxList = {};
        this._radioGroup = this.findChildElem('calendar').findMixedBlock( radioGroup );
        let tickets = this.findChildBlocks( Ticket );
        let timezoneSelect = this.findChildBlock( Select, 'calendar', true );

        timezoneSelect._events().on( 'change', function() {
          let timezone = this.getVal();
          tickets.forEach( ticket => {
            ticket.setTimeZone( timezone ).setDateTime( ticket.params.ticket.time_gmt3 );
          } )
        } );

        timezoneSelect.setVal( new Date().getTimezoneOffset() * -1 );

        this._elems( 'list-tickets-set' ).forEach( function ( box ) {
          theTabs._boxList[ box.params.day ] = box;
        });

        this._onRadioGroupChange();
        this._events( this._radioGroup ).on( 'change', this._onRadioGroupChange );
      }
    }
  },

  _onRadioGroupChange: function() {
    var newVal = this._radioGroup.getVal();

    this._elems( 'list-tickets-set' ).delMod( 'show' );
    this._boxList[ newVal ].setMod( 'show' );
  },

  /**
   * Sets active tab by index number
   * @param {Number} index
   * @returns {tabs} this
   */
  changeTab: function( index ) {
      this.findChildBlock( radioGroup ).setVal( index );
      return this;
    }
  },  /** @lends tabs */{
    lazyInit: false
  }));

});
