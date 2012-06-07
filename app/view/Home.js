Ext.define('GS.view.Home', {
		extend: 'Ext.Panel',
		xtype: 'homepanel',
		config: {
				title: 'Home',
				iconCls: 'home',
				
				cls: 'home',
				scrollable: true,
				styleHtmlContent: true,
				
				html: [
						'<img src="http://css.thestreet-static.com/files/tsc/v2008/css/_1338411600100/min/images/tsc_logo215x72.gif" />',
						'<h1>Welcome to TheStreet Mobile</h1>',
						"<p>Browse Categories</p>",
						'<ul class="category-list">',
						'<li><a href="">Happening Now</a></li>',
						'<li><a href="">Techonology</a></li>',
						'<li><a href="">Small Business</a></li>',
						'<li><a href="">Stock Picks</a></li>',
						'</ul>',
				].join("")
		}
});