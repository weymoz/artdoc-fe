modules.define('card-selection', function(provide, CardSelection) {

provide(CardSelection.declMod({ modName: 'view', modVal: 'headless' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
