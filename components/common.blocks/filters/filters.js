modules.define('filters',
[ 'i-bem-dom', 'form', 'jquery', 'BEMHTML', 'button', 'radio-group', 'history', 'uri__querystring', 'page', 'header', 'dropdown' ],
function(provide, bemDom, Form, $, BEMHTML, Button, radioGroup, History, Querystring, Page, Header, navMenu ) {

provide(bemDom.declBlock(this.name, {
  onSetMod: {
    js: {
      inited: function() {
        this._history = new History();

        this._menu = this.findParentBlock( Page )
          .findChildBlock( Header )
          .findChildBlock( { block: navMenu, modName: 'nav-menu', modVal: true } );
        this._domEvents( this._elem('title') ).on('click', this._openMenu );        
        
        this._toggle = this._elem('toggle').findMixedBlock( Button );
        this._toggle.target = this._elem('form');
        this._domEvents( this._toggle ).on('click', this._onToggle );

        this._close = this._elem('close');
        this._domEvents( this._elem('close') ).on('click', this._onToggle );

        this._sort = this._elem('sort').findMixedBlock( radioGroup );
        this._events( this._sort ).on('change', this._onSortChange, this );

        this._view = this._elem('view').findMixedBlock( radioGroup );
        this._events( this._view ).on('change', this._onViewChange, this );

        this._form = this._elem('form').findChildBlock( Form );
        this._form.initialVal = this._form.getVal();
        this._form.resultTo = this._elem('content');
        this._form.filtersCount = this._elem('count');
        this._form.reset = this._elem('reset');
        this._domEvents( 'reset' ).on('click', this._resetForm, this );
        this._form.resultCount = this._elem('result-count');
        this._form.pagination = this._elem('footer');
        this._form.history = new History();
        this._events( this._form ).on('change', this._onFormChange, this );
      }
    }
  },

  _openMenu: function () {
    this._menu.toggleMod('opened');
  },

  _resetForm: function () {
    this._form.setVal( {
      free: false,
      rating: [],
      year: [],
      country: [],
      studio: [],
      genre: [],
      period: [],
      action_country: [],
      action_city: [],
      language: [],
      subs: [],
      fin_type: []
    } );
  },

  _onToggle: function () {
    this._toggle.target.setMod( 'show', !this._toggle.hasMod('checked') );
  },

  _onSortChange: function () {
    let uri = Querystring.Uri.parse( window.location.href );
    uri.replaceParam( 'sort', this._sort.getVal() );

    this._history.pushState( {}, 'Title', uri.toString() );

    this._onFormChange();
  },

  _onViewChange: function () {
    let uri = Querystring.Uri.parse( window.location.href );
    this.setMod('result', this._view.getVal() );
    uri.replaceParam( 'view', this._view.getVal() );

    this._history.pushState( {}, 'Title', uri.toString() );

    this._onFormChange();
  },

  _onFormChange: function () {
    this._form.resultTo.setMod('loading', true);
    let formData = this._form.getVal();

    // Count used filters
    let selectedFields = Object.keys( formData ).filter( item => formData[ item ].length );
    let selectedCount = selectedFields.length;
    bemDom.update(
      this._form.filtersCount.domElem,
      selectedCount
        ? BEMHTML.apply( [
            { block: 'text', mods: { plural: true }, content: { number: selectedCount, one: 'Выбран ', two: 'Выбрано ', five: 'Выбрано ' } },
            selectedCount,
            { block: 'text', mods: { plural: true }, content: { number: selectedCount, one: ' фильтр', two: ' фильтра', five: ' фильтров' } }
          ] )
        : ''
    );

    bemDom.update(
      this._form.reset.domElem,
      selectedCount
        ? 'Сбросить'
        : ''
    );

    let hash = {};
    selectedFields.forEach( filter => {
      hash[filter] = Array.isArray( formData[ filter ] ) ? formData[ filter ].join(',') : formData[ filter ];
    })

    let uri = Querystring.Uri.parse( window.location.href );
    let view = uri.getParam('view') || 'grid';
    let sort = uri.getParam('sort') || '-rating';

    uri.setQuery(''); // reset all filters
    uri.replaceParam( 'page', 1 ); // reset pagination
    uri.replaceParam( 'sort', sort );
    uri.replaceParam( 'view', view );
    Object.keys( hash ).forEach( filter => {
      uri.addParam( filter, hash[ filter ] );
    } );

    let history = this._history;
    history.pushState( {}, 'Title', uri.toString() );

    $.ajax({
      async: true,
      type: 'GET',
      url: '/api/filter/',
      data: {
        filters: formData,
        sort: sort
      },
    }).done( response => {
      const data = JSON.parse( response )

      bemDom.update(
        this._form.resultCount.domElem,
        data.meta.total_count
      );

      bemDom.update(
        this._form.resultTo.domElem,
        BEMHTML.apply( data.items.map( movie => {
          return {
            block: 'card-movie',
            mods: { view: view, size: 'm', theme: 'artdoc' },
            mix: { block: 'filters', elem: 'result-item' },
            movie: movie
          }
        } ) )
      )

      this._form.resultTo.setMod('loading', false);

      let pagination = data.meta;
      let req_url = new URL(window.location.href);
      pagination.params = req_url.searchParams;

      bemDom.update(
        this._form.pagination.domElem,
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
