Ext.application({
    name: 'TestExtjs',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                region: 'center',
                xtype: 'tabpanel',
                activeTab: 0,
                items: [{
                    xtype: 'TestExtjs.user.view.List'
                },
               ]
            }]
        });
    }
});