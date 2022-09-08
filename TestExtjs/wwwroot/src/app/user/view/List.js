var cacc1 = [
    [1, '1253348294062098'],
    [2, '3763327226218499'],
    [3, '8459314594407774'],
    [4, '6033316422671924'],
    [5, '4243317558633258']
];

var cnames = [
    [1, 'Zara Watts'],
    [2, 'Jacob Poulsen'],
    [3, 'Shi Carrire'],
    [4, 'Shanty Tewelde'],
    [5, 'Zikoranachukwudimma Gingras']
];

Ext.define('TestExtjs.user.view.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'TestExtjs.user.view.List',

    title: 'Форма',

    controller: 'usercontroller',
    viewModel: 'userviewmodel',

    bind: {
        store: '{clients}'
    },

    tbar: [{
        xtype: 'form',
        width: '100%',
        border: false,
        items: [{
            layout: 'hbox',
            margin: '15 15 15 15',
            border: false,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Номер:*',
                name: 'number',
                maskRe: /[0-9]/,
                allowBlank: false,
                margin: '0 10 0 0'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Дата:*',
                name: 'date',
                //maskRe: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
                allowBlank: false,
                labelWidth: '50px',
                margin: '0 10 0 0'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Дата проводки:',
                name: 'date_exec',
                //maskRe: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
                allowBlank: false
            }],
        }, {
            layout: 'hbox',
            margin: '15 15 15 15',
            border: false,
            items: [{
                xtype: 'combobox',
                allowBlank: false,
                maxLength: 16,
                fieldLabel: 'Счёт отправителя:*',
                store: new Ext.data.SimpleStore({
                    id: 0,
                    fields: [ 'myId', 'myText' ],
                    data: cacc1
                }),
                valueField: 'myId',
                displayField: 'myText',
                queryMode: 'local',
                name: 'caccount1',
                flex: 1,
                margin: '0 10 0 0'
            }, {
                xtype: 'combobox',
                allowBlank: false,
                fieldLabel: 'Наименование отправителя:*',
                store: new Ext.data.SimpleStore({
                    id: 0,
                    fields: ['myId', 'myText'],
                    data: cnames
                }),
                valueField: 'myId',
                displayField: 'myText',
                queryMode: 'local',
                name: 'caccount2',
                flex: 3
            }],
        }, {
            layout: 'hbox',
            border: false,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Корреспондент:',
                name: 'corr1_n',
                margin: '0 15 0 15',
                flex: 1
            }]
        }, {
            layout: 'hbox',
            border: false,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Наим. дохода:',
                name: 'dohname',
                margin: '15 15 15 15',
                flex: 1
            }]
        },]
    }],

    columns: [
    {
        text: 'ID',
        dataIndex: 'id'
    }, {
        text: 'Сумма',
        dataIndex: 'sum'
    }, {
        text: 'Реквизиты получателя',
        dataIndex: 'receiverReq'
    }, {
        text: 'Дата',
        dataIndex: 'date'
    }, {
        text: 'Корреспондент',
        dataIndex: 'corresp',
        flex: 1
    },],

    listeners: {
        itemcontextmenu: 'userContextmenu'
    }
});