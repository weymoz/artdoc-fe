modules.define('header__logo', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('header', 'logo', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
