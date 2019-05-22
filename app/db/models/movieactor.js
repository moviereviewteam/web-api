'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieActor = sequelize.define('MovieActor', {
    movieId: DataTypes.INTEGER,
    actorId: DataTypes.INTEGER
  }, {});
  MovieActor.associate = function(models) {
    MovieActor.belongsTo(models.Movie, { foreignKey: 'movieId' });
    MovieActor.belongsTo(models.Actor, { foreignKey: 'actorId' });
  };
  return MovieActor;
};