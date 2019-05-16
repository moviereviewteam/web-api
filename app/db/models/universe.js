'use strict';
module.exports = (sequelize, DataTypes) => {
  const Universe = sequelize.define('Universe', {
    name: DataTypes.STRING
  }, {});
  Universe.associate = function(models) {
    // associations can be defined here
  };
  return Universe;
};