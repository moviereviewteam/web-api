'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define('MovieGenre', {
    movieId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  MovieGenre.associate = function(models) {
    // associations can be defined here
  };
  return MovieGenre;
};