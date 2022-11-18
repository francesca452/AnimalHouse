const mongoCredentials = {
	user: 'site212225',
	pwd: 'IeZ4eePa',
	site: 'mongo_site212225'
}

module.exports = {
	'database':  `mongodb://${mongoCredentials.user}:${mongoCredentials.pwd}@${mongoCredentials.site}?writeConcern=majority`,
	
	JWT_SECRET:'d84b4fa637feec0fa2e3299703f6f8cd7ba0aa44a6d0156ecfe661f242242ae898553b',
    JWT_EXPIRE:'10min',
    
    EMAIL_SERVICE:'SendGrid',
    EMAIL_USERNAME:'apikey',
    EMAIL_PASSWORD:'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',

    EMAIL_FROM:'cosimocoppolaro.fi@gmail.com
}
