'use strict';

const moment = require('moment');

const now = moment().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Universes', [{
      id: 1,
      name: 'Marvel',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      name: 'DC',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 3,
      name: 'The Conjuring',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Universes', null, {});
  }
};
