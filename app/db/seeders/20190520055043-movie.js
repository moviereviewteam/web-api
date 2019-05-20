'use strict';

const moment = require('moment');

const now = moment().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      id: 1,
      image: 'upload/movie/Avengers4.jpg',
      trailer: 'https://youtu.be/knZb5PJUSPQ',
      nameVi: 'Avengers: Hồi Kết',
      nameEn: 'Avengers: Endgame',
      overView: 'Sau sự kiện hủy diệt tàn khốc, vũ trụ chìm trong cảnh hoang tàn. Với sự trợ giúp của những đồng minh còn sống sót, biệt đội siêu anh hùng Avengers tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục lại trật tự của vũ trụ.',
      premiereDate: '04/26/2019',
      duration: 181,
      ageLimit: 13,
      director: 'Joe Russo, Anthony Russo',
      producer: 'Kevin Feige',
      universeId: 1,
      isVietnameseMovie: false,
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};

