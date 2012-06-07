Ext.define('GS.view.Articles', {
		extend: 'Ext.navigation.View',
		xtype: 'blogpanel',
		
		requires: [
				'Ext.dataview.List',
				'Ext.data.proxy.JsonP',
				'Ext.data.Store'
		],
		
		config: {
				title: 'Articles',
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
										url: 'http://jahdy.com/apps/localproxy.php?url=http://ipad.api.thestreet.com/news/1/1.js?includeContent=true',
										reader: {
												type: 'json',
												rootProperty: 'response.articles'
										}
								}
						}
				}
		}
});