Ext.define('TestExtjs.user.controller.User', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usercontroller',

    refreshUsersList() {
        let vm = this.getViewModel(),
            usersStore = vm.getStore('clients');
        usersStore.load();      
    },
});