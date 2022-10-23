const mongoCredentials = {
	user: 'site212225',
	pwd: 'IeZ4eePa',
	site: 'mongo_site212225'
}

module.exports = {
    /* database:'mongodb://localhost/animal_house' */
	'database':  `mongodb://${mongoCredentials.user}:${mongoCredentials.pwd}@${mongoCredentials.site}?writeConcern=majority`
}
