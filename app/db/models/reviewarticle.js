'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewArticle = sequelize.define('ReviewArticle', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    isReviewArticle: DataTypes.BOOLEAN
  }, {});
  ReviewArticle.associate = function(models) {
    ReviewArticle.belongsTo(models.Movie, { foreignKey: 'movieId' });
    ReviewArticle.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return ReviewArticle;
};