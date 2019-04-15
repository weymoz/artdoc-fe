modules.define(
  'nav-menu',

  ['i-bem-dom', 'dropdown', 'page', 'header'],

  function(provide, bemDom, navMenu, Page, Header) {
    provide(
      bemDom.declBlock(this.name, {
        beforeSetMod: {
          js: {
            inited: function() {
              if (window.innerWidth > 500) {
                let currentUrl = window.location.pathname;
                var regMovie = /\/(en|ru)\/movie/i;
                var regSelection = /\/(en|ru)\/selection/i;
                var regCinema = /\/(en|ru)\/cinema/i;
                var regSuppport = /\/(en|ru)\/support/i;
                let isMovie = regMovie.test(currentUrl);
                let isSelection = regSelection.test(currentUrl);
                let isCinema = regCinema.test(currentUrl);
                let isSupport = regSuppport.test(currentUrl);
                let links = this.findChildElems('item');
                if (isMovie) {
                  links.get(0).setMod('checked');
                } else if (isSelection) {
                  links.get(1).setMod('checked');
                } else if (isCinema) {
                  links.get(2).setMod('checked');
                } else if (isSupport) {
                  links.get(3).setMod('checked');
                }
              }
            }
          }
        },

        onSetMod: {
          js: {
            inited: function() {
              this._menu = this.findParentBlock(Page)
                .findChildBlock(Header)
                .findChildBlock({
                  block: navMenu,
                  modName: 'nav-menu',
                  modVal: true
                });
              this._domEvents(this._elem('close')).on('click', this._openMenu);
            }
          }
        },

        _openMenu: function() {
          console.log(this._menu);
          this._menu.delMod('opened');
        }
      })
    );
  }
);
