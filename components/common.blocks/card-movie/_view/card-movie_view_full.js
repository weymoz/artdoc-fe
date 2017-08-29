modules.define('card-movie', function(provide, CardMovie) {

provide(CardMovie.declMod({ modName: 'view', modVal: 'full' }, {
  onSetMod: {
    js: {
      inited: function() {
        this.__base.apply( this, arguments );
        this._cover = this._elem('image');
        this._domEvents('slider-item').on( 'click', ( event ) => {
          let image_id = event.bemTarget.params.image_id;

          this._elems('slider-item').setMod('checked', false);
          event.bemTarget.setMod('checked', true);

          switch ( event.bemTarget.getMod('type') ) {
            case 'image':
              this._cover.domElem[0].src = '/upload/resize/' + image_id + '/843x474.1875.jpg';
              this._elem('video-container').setMod('visible', false);
              this._elem('header').setMod('hide', false);
              break;
            case 'video':
              this._elem('video-container').setMod('visible', true);
              this._elem('header').setMod('hide', true);
              break;
          }
        } );
      }
    }
  }
}));

});
