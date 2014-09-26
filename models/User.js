module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'User'
		, {
			id: {
				type: DataTypes.INTEGER.UNSIGNED
				, autoIncrement: true
				, allowNull: false
				, primaryKey: true
			}
			, name: {
				type: DataTypes.STRING(45)
			}
			, title: {
				type: DataTypes.STRING(45)
			}
		}
	);
};
