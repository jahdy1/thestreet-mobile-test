Ext.define('GS.view.Contact', {
		extend: 'Ext.form.Panel',
		xtype: 'contactpanel',
		
		config: {
				title: 'Contact',
				iconCls: 'user',
				
				items: [
						{
								xtype: 'fieldSet',
								title: 'Contact Us',
								instructions: '(Email address not required)',
								items: [
										{
												xtype: 'textfield',
												name: 'name',
												label: 'Name'
										},
										{
												xtype: 'emailfield',
												name: 'email',
												label: 'Email'
										},
										{
												xtype: 'textareafield',
												name: 'message',
												label: 'Message'
										}
								]
						},
				]
		}
});