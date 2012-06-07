Ext.define("GS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
						{
								xtype: 'homepanel'
						},
						{
								xtype: 'blogpanel'
						},
						{
								xtype: 'contactform'
						}
        ]
    }
});