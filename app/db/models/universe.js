'use strict';
module.exports = (sequelize, DataTypes) => {
  const Universe = sequelize.define('Universe', {
    name: DataTypes.STRING
  }, {});
  Universe.associate = function(models) {
    Universe.hasOne(models.Movie, { foreignKey: 'universeId' });
  };
  return Universe;
};