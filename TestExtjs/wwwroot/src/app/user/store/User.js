Ext.define('TestExtjs.user.store.User', {
    extend: 'Ext.data.Store',
    alias: 'store.clients',
    model: 'TestExtjs.user.model.User',

    proxy: {
        type: 'ajax',
        url: '/Clients/GetClientsList'
    },

    autoLoad: true
});