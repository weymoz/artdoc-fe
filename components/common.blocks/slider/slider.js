modules.define('slider',
  ['i-bem-dom', 'button' ],
  function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {

                var pages = this.findChildElems('page');
                var pagination = this.findChildElems('page-item');
                this._currentPage = this.params.currentPage;
                this._pageCount = this.params.pageCount;

                this._domEvents('next').on('click', function(event) {
                if ( this._currentPage < this._pageCount - 1 ) {
                    this._elem('prev').findMixedBlock(Button).setMod('disabled', false);
                    pages.get( this._currentPage ).setMod('visible', false);
                    pagination.get( this._currentPage ).setMod('active', false);
                    pagination.get( ++this._currentPage ).setMod('active', true);
                    pages.get( this._currentPage ).setMod('visible', true);
                }
                if ( this._currentPage == this._pageCount - 1) {
                    event.bemTarget.findMixedBlock(Button).setMod('disabled');
                }
                })

                this._domEvents('prev').on('click', function() {
                  if ( this._currentPage > 0 ) {
                    this._elem('next').findMixedBlock(Button).setMod('disabled', false);
                    pages.get( this._currentPage ).setMod('visible', false);
                    pagination.get( this._currentPage ).setMod('active', false);
                    pagination.get( --this._currentPage ).setMod('active', true);
                    pages.get( this._currentPage ).setMod('visible', true);
                  }
                  if ( this._currentPage == 0) {
                    this._elem('prev').findMixedBlock(Button).setMod('disabled');
                  }
                })

                this._domEvents('page-item').on('click', function( event ) {
                  this._currentPage = event.bemTarget.params.index;
                  pages.setMod('visible', false);
                  pagination.setMod('active', false);
                  pages.get( event.bemTarget.params.index ).setMod('visible', true);
                  pagination.get( event.bemTarget.params.index ).setMod('active', true);

                  if(event.bemTarget.params.index == this._pageCount - 1) {
                    this._elem('next').findMixedBlock(Button).setMod('disabled', true);
                    this._elem('prev').findMixedBlock(Button).setMod('disabled', false);
                  } else if(event.bemTarget.params.index == 0) {
                    this._elem('prev').findMixedBlock(Button).setMod('disabled', true);
                    this._elem('next').findMixedBlock(Button).setMod('disabled', false);
                  } else {
                    this._elem('prev').findMixedBlock(Button).setMod('disabled', false);
                    this._elem('next').findMixedBlock(Button).setMod('disabled', false);
                  }
                })

            }
        }
    },

}));

});

