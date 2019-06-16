'use strict';

const moment = require('moment');

const now = moment().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Universes', [{
      id: 1,
      name: 'Marvel',
      description: 'Vũ trụ Điện ảnh Marvel là một thương hiệu truyền thông và một vũ trụ chia sẻ hư cấu, tập trung vào một loạt các bộ phim siêu anh hùng do Marvel Studios sản xuất độc lập và dựa trên các nhân vật trong những ấn phẩm của Marvel Comics.',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      name: 'DC',
      description: 'DC Comics là một trong những công ty lớn nhất và phổ biến nhất hoạt động trong thị trường sách truyện tranh của Mỹ và phương tiện truyền thông có liên quan. Đây là bộ phận xuất bản của DC Entertainment Inc - từ năm 1969 là một công ty con của Warner Bros Entertainment, thuộc sở hữu của Time Warner.',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 3,
      name: 'The Conjuring',
      description: 'The Conjuring Universe là một thương hiệu phim kinh dị và vũ trụ giả tưởng của Mỹ, được sản xuất bởi New Line Cinema, Công ty Safran, Atomic Monster Productions và được phân phối bởi Warner Bros.',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Universes', null, {});
  }
};
