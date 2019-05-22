'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define('MovieGenre', {
    movieId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  MovieGenre.associate = function(models) {
    MovieGenre.belongsTo(models.Movie, { foreignKey: 'movieId' });
    MovieGenre.belongsTo(models.Genre, { foreignKey: 'genreId' });
  };
  return MovieGenre;
};