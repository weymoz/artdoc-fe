block('card-selection')(
    match( function () { return this.ctx.selection } ).def()( function () {
        let _this = {};
        Object.keys( this.ctx.selection ).map( key => {
            _this[ '_' + key ] = this.ctx.selection[ key ];
        } );
        return applyNext(_this);
    } ),
    tag()('article')
)
