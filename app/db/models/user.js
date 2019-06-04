'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    name: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.BOOLEAN,
    roleId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasMany(models.ReviewArticle, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });
    User.hasMany(models.FavoriteList, { foreignKey: 'userId' });
  };
  return User;
};