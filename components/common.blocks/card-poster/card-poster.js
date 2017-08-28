modules.define('card-poster',
['i-bem-dom', 'card-movie', 'BEMHTML'],

function(provide, bemDom, cardMovie, BEMHTML) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {

              this._domEvents('item').on( 'click', (e) => {
                let card = e.bemTarget.findMixedBlock(cardMovie);
                this.findChildElems('item').setMod('selected', false);
                e.bemTarget.setMod('selected', true);
                let template = BEMHTML.apply( { block: 'card-movie', mods: { view: 'slide', theme: 'artdoc-dark' }, movie: card.params.movie } );
                bemDom.update(
                  this._elem('preview').domElem,
                  template
                )
              } )


            }
        }
    }
}));

});
