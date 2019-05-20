'use strict';

const moment = require('moment');

const now = moment().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieGenres', [{
      id: 1,
      movieId: 1,
      genreId: 1,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      movieId: 1,
      genreId: 2,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 3,
      movieId: 1,
      genreId: 3,
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieGenres', null, {});
  }
};

