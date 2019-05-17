'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER,
    reviewArticleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};