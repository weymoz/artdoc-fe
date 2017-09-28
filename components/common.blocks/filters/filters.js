modules.define('filters',
[ 'i-bem-dom', 'form', 'jquery', 'BEMHTML', 'button', 'history', 'uri__querystring', 'page', 'header', 'dropdown' ],
function(provide, bemDom, Form, $, BEMHTML, Button, History, Querystring, Page, Header, navMenu ) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        this._menu = this.findParentBlock( Page )
          .findChildBlock( Header )
          .findChildBlock( { block: navMenu, modName: 'nav-menu', modVal: true } );
        this._domEvents( this._elem('title') ).on('click', this._openMenu );        
        
        this._toggle = this._elem('toggle').findMixedBlock( Button );
        this._toggle.target = this._elem('form');
        this._domEvents( this._toggle ).on('click', this._onToggle );

        this._close = this._elem('close');
        this._domEvents( this._elem('close') ).on('click', this._onToggle );

        this._form = this._elem('form').findChildBlock( Form );
        this._form.initialVal = this._form.getVal();
        this._form.resultTo = this._elem('content');
        this._form.filtersCount = this._elem('count');
        this._form.resultCount = this._elem('result-count');
        this._form.pagination = this._elem('footer');
        this._form.history = new History();
        this._events( this._form ).on('change', this._onChange, this._form );
      }
    }
  },

  _openMenu: function () {
    this._menu.toggleMod('opened');
  },

  _onToggle: function() {
    this._toggle.target.setMod( 'show', !this._toggle.hasMod('checked') );
  },

  _onChange: function() {
    this.resultTo.setMod('loading', true);
    let formData = this.getVal();


    // Count used filters
    let selectedFields = Object.keys( formData ).filter( item => formData[ item ].length );
    let selectedCount = selectedFields.length;
    bemDom.update(
      this.filtersCount.domElem,
      selectedCount
        ? BEMHTML.apply( [
          { block: 'text', mods: { plural: true }, content: { number: selectedCount, one: 'Выбран ', two: 'Выбрано ', five: 'Выбрано ' } },
          selectedCount,
          { block: 'text', mods: { plural: true }, content: { number: selectedCount, one: ' фильтр', two: ' фильтра', five: ' фильтров' } }
          ] )
        : ''
    );

    let uri = Querystring.Uri.parse(window.location.href);

    let hash = {};
    selectedFields.forEach( filter => {
      hash[filter] = Array.isArray( formData[ filter ] ) ? formData[ filter ].join(',') : formData[ filter ];
    })

    uri.setQuery(''); // reset all filters
    uri.replaceParam( 'page', 1 ); // reset pagination
    Object.keys( hash ).forEach( filter => {
      uri.addParam( filter, hash[ filter ] );
    } );

    let history = this.history;
    history.pushState( {}, 'Title',uri.toString() );

    $.ajax({
      async: true,
      type: 'GET',
      url: '/api/filter/',
      data: { filters: formData },
    }).done( response => {
      const data = JSON.parse( response )
      // console.log( data );

      bemDom.update(
        this.resultCount.domElem,
        data.meta.total_count
      );

      bemDom.update(
        this.resultTo.domElem,
        BEMHTML.apply( data.items.map( movie => {
          return {
            block: 'card-movie',
            mods: { view: 'list', size: 'm', theme: 'artdoc' },
            movie: movie
          }
        } ) )
      )

      this.resultTo.setMod('loading', false);

      let pagination = data.meta;
      let req_url = new URL(window.location.href);
      pagination.params = req_url.searchParams;

      bemDom.update(
        this.pagination.domElem,
        BEMHTML.apply( {
          block: 'pagination',
          params: pagination
        } )
      )

    } )
    // this.setVal( this.initialVal );

    // selectedFields.forEach( fieldName => {
    //   console.log( this.getFieldByName( fieldName ).getVal() );
    // } );
  }
}));

});
