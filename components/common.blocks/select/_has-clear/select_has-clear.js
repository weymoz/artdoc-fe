modules.define('select', function(provide, Select) {

provide(Select.declMod({ modName: 'has-clear', modVal: true }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply(this, arguments);

        this._events().on('change', this._updateClear, this);
        this._updateClear();
      }
    }
  },

  _onClearClick : function() {
    this
      .setVal( this.hasMod('mode', 'check') ? [] : '' )
      // .setMod('focused');
  },

  _updateClear : function() {
    this._elem('clear').toggleMod( 'visible', true, !!( this.hasMod('mode', 'check') ? this.getVal().length : this.getVal() ) );
  }
},{
  onInit : function() {
    this._domEvents('clear').on('pointerclick', function() {
      this._onClearClick();
    });

    return this.__base.apply(this, arguments);
  }
}));

});
