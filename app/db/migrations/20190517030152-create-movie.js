'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      nameVi: {
        type: Sequelize.STRING
      },
      nameEn: {
        type: Sequelize.STRING
      },
      overView: {
        type: Sequelize.TEXT
      },
      premiereDate: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      ageLimit: {
        type: Sequelize.INTEGER
      },
      director: {
        type: Sequelize.STRING
      },
      producer: {
        type: Sequelize.STRING
      },
      universeId: {
        type: Sequelize.INTEGER
      },
      isVietnameseMovie: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};