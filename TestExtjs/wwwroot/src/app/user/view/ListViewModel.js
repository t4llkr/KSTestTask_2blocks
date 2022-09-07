/*
 * Модель представления пользователей (списка и редактирования)
 */
Ext.define('TestExtjs.user.view.ViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.userviewmodel',


    stores: {
        clients: {
            type: 'clients'
        }
    }
});
