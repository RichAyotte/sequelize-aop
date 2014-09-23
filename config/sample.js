module.exports = {
	database: {
		name: 'sequelize_test'
		, username: 'sequelize_test'
		, password: 'password'
		, options: {
			dialect: 'mysql'
			, define: {
				underscored: false
				, freezeTableName: true // Pluralise table names manually.
				, syncOnAssociation: true
				, charset: 'utf8'
				, collate: 'utf8_unicode_ci'
				, timestamps: true
			}
			, host: '127.0.0.1'
			, logging: console.log
		}
	}
};
