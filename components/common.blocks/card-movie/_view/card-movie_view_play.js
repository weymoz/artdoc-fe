modules.define('card-movie', function(provide, CardMovie) {

provide(CardMovie.declMod({ modName: 'view', modVal: 'play' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
