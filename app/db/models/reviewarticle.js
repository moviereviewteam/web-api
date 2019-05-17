'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewArticle = sequelize.define('ReviewArticle', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  ReviewArticle.associate = function(models) {
    // associations can be defined here
  };
  return ReviewArticle;
};