Ext.define('GS.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            blog: 'blogpanel'
        },
        control: {
            'blogpanel list': {
								itemtap: 'showPost'
						}
        }
    },
		showPost: function(list, index, target, record){
				this.getBlog().push({
						xtype: 'panel',
						title: record.get('headline'),
						html: record.get('body'),
						scrollable: true,
						styleHtmlContent: true
				})
		}
});