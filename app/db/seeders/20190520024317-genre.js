'use strict';

const moment = require('moment');

const now = moment().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [{
      id: 1,
      name: 'Hành động',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      name: 'Khoa học viễn tưởng',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 3,
      name: 'Phiêu lưu',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 4,
      name: 'Hoạt hình',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 5,
      name: 'Hình sự',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 6,
      name: 'Hồi hộp - Gay cấn',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 7,
      name: 'Bí ẩn - Siêu nhiên',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 8,
      name: 'Kinh dị',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 9,
      name: 'Hài hước',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 10,
      name: 'Tình cảm - Lãng mạn',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 11,
      name: 'Tâm lý',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 12,
      name: 'Gia đình',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
