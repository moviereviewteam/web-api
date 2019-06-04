'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteList = sequelize.define('FavoriteList', {
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  FavoriteList.associate = function(models) {
    FavoriteList.belongsTo(models.Movie, { foreignKey: 'movieId' });
    FavoriteList.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return FavoriteList;
};