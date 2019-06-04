'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    image: DataTypes.STRING,
    trailer: DataTypes.STRING,
    nameVi: DataTypes.STRING,
    nameEn: DataTypes.STRING,
    overView: DataTypes.TEXT,
    premiereDate: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    ageLimit: DataTypes.INTEGER,
    director: DataTypes.STRING,
    producer: DataTypes.STRING,
    universeId: DataTypes.INTEGER,
    isVietnameseMovie: DataTypes.BOOLEAN
  }, {});
  Movie.associate = function(models) {
    Movie.hasMany(models.MovieActor, { foreignKey: 'movieId' });
    Movie.hasMany(models.MovieGenre, { foreignKey: 'movieId' });
    Movie.hasMany(models.ReviewArticle, { foreignKey: 'movieId' });
    Movie.hasMany(models.FavoriteList, { foreignKey: 'movieId' });
    Movie.belongsTo(models.Universe, { foreignKey: 'universeId' });
  };
  return Movie;
};