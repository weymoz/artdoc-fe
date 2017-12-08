block('select').content()(function() {
    return [
        { elem : 'button' },
        {
          block : 'popup',
          mods : { target : 'anchor', theme : this.mods.theme, autoclosable : true },
          directions : ['bottom-left'],
          content : { block : this.block, mods : this.mods, elem : 'menu' }
        }
    ];
})
