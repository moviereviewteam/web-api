'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    score: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};