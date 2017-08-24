/**
 * @module ticket-case
 */

modules.define('ticket-case',
  ['i-bem-dom', 'radio-group'],
  function(provide, bemDom, radioGroup) {

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
