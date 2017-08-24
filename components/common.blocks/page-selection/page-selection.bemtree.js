block('page-selection').replace()(function() {

    const selection = this.data.api;
    return [
        {
            elem: 'content',
            content: [
                {
                    block: 'card-selection',
                    mods: {
                        view: [ 'detail' ]
                    },
                    selection: selection
                }
            ]
        },
        { block: 'pagination', params: this.data.pagination }
    ];
});
