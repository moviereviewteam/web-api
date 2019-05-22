'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    placeOfBirth: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Actor.associate = function(models) {
    Actor.hasMany(models.MovieActor, { foreignKey: 'actorId' });
  };
  return Actor;
};