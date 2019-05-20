'use strict';

const moment = require('moment');

const now = moment().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieActors', [{
      id: 1,
      movieId: 1,
      actorId: 1,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      movieId: 1,
      actorId: 2,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 3,
      movieId: 1,
      actorId: 3,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 4,
      movieId: 1,
      actorId: 4,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 5,
      movieId: 1,
      actorId: 5,
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieActors', null, {});
  }
};

