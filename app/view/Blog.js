Ext.define('GS.view.Blog', {
		extend: 'Ext.navigation.View',
		xtype: 'blogpanel',
		
		requires: [
				'Ext.dataview.List',
				'Ext.data.proxy.JsonP',
				'Ext.data.Store'
		],
		
		config: {
				title: 'Blog',
				iconCls: 'star',
				
				items: {
						xtype: 'list',
						itemTpl: '{headline}',
						title: 'TheStreet Articles', 
						
						store: {
							autoLoad: true,
								fields: ['headline','authorId','articleId','body'],
								
								proxy: {
										type: 'jsonp',
										url: 'http://localhost/Dropbox/localproxy.php?url=http://ipad.api.thestreet.com/news/1/1.js?term=%28keyword:%22Financial%20Services%22+OR+storytype:%281103992+OR+1121576%29%29+AND+sitecode:TSC&includePartnerContent=false&includeContent=false',
										reader: {
												type: 'json',
												rootProperty: 'response.articles'
										}
								}
						}
				}
		}
});