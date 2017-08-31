modules.define('select', function(provide, Select) {

provide(Select.declMod({ modName: 'calendar', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply( this, arguments );
            }
        }
    }
},{
  lazyInit: false
}));

});
