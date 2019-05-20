'use strict';

const moment = require('moment');

const now = moment().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Actors', [{
      id: 1,
      image: 'upload/actor/JoshBrolin.jpg',
      name: 'Josh Brolin',
      dateOfBirth: '02/12/1968',
      placeOfBirth: 'Los Angeles, California, USA',
      description: 'Josh James Brolin, sing ngày 12 tháng 2 năm 1969 tại Santa Monica, California, là một nam diễn viên người Mỹ. Vai diễn đầu tiên của ông là vào năm 1985 trong phim The Goonies. Sau đó ông lần lượt xuất hiện trong các phim Bed of Roses (1996), Mimic (1997), The Mod Squad (1999), Hollow Man (2000), và Into the Blue (2005). Năm 2007 ông tham gia vào một phân đoạn của Planet Terror trong bộ phim Grindhouse của Robert Rodriguez. Cũng trong năm đó, ông là đồng diễn viên chính trong phim In the Valley of Elah, No Country for Old Men và American Gangster. Năm 2008, Brolin đóng vai George W. Bush cho bộ phim về tiểu sử của W. Cũng trong năm đó, ông thủ vai Dan White trong phim Milk. Brolin từng thủ vai Agent K phiên bản trẻ trong phim Men in Black 3 năm 2012. Năm 2014, ông lồng tiếng cho nhân vật phản diên Thanos trong phim Guardians of the Galaxy của Marvel Studios. Ông cũng thủ lại vai này trong phim Avengers: Age of Ultron 2015.',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      image: 'upload/actor/ChrisPratt.jpg',
      name: 'Chris Pratt',
      dateOfBirth: '06/21/1979',
      placeOfBirth: 'Virginia, Minnesota, United States',
      description: 'Christopher Michael "Chris" Pratt (sinh ngày 21 tháng 6 năm 1979) là một diễn viên người Mỹ, được biết đến bởi những vai diễn trên truyền hình, gồm vai Bright Abbott trong Everwood, và Andy Dwyer trong Parks and Recreation. Khởi nghiệp diễn xuất từ những vai phụ trong các phim chính thống như Wanted, Bride Wars, Jennifer\'s Body, Moneyball, What\'s Your Number?, The Five-Year Engagement, Zero Dark Thirty, Movie 43, Delivery Man và Her trước khi được giao đóng vai chính vào năm 2014 trong The Lego Movie và Guardians of the Galaxy. Anh cũng sẽ xuất hiện trong Jurassic World, phần tiếp theo của Công viên kỷ Jura.',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 3,
      image: 'upload/actor/RobertDowney.jpg',
      name: 'Robert Downey Jr.',
      dateOfBirth: '04/04/1965',
      placeOfBirth: 'New York City, New York, USA',
      description: 'Robert John Downey, Jr là một diễn viên người Mỹ. Ông được sinh ra ở Manhattan, New York. Downey xuất hiện trên màn hình vào năm 1970, ở tuổi lên năm. Từ năm 1996 đến năm 2001, Downey đã nhiều lần bị bắt về tội ma túy và đã nhiều lần thông qua chương trình điều trị thuốc không thành công. Sự trở lại ấn tượng của Robert Downey Jr. trong năm qua với ’’Iron Man’’ (Người Sắt) và ’’Tropic Thunder’ (Sấm nhiệt đới) được đánh giá rất cao. Iron Man, bộ phim anh thủ vai chính đã thu về hơn nửa tỉ USD trên toàn cầu kể từ khi phát hành hồi tháng 5/2008. "Tropic Thunder", bộ phim ra mắt tháng 8/2008 do Ben Stiller viết kịch bản và làm đạo diễn có sự góp mặt của "người sắt" cũng đã kịp bỏ túi 110 triệu USD. Đầu năm tới, Robert Downey Jr. sẽ trở lại màn ảnh bên cạnh ngôi sao da màu Jamie Foxx trong The Soloist của đạo diễn "Atonement", Joe Wright. Nhưng hiện tại anh đang bận rộn với những cảnh quay đầu tiên của bộ phim vềthám tử Sherlock Holmes tại London, Anh. Trong năm 2010 và 2011, Robert Downey Jr. sẽ góp mặt trong hai phim: The Avengers (2011) và Iron Man 2 (2010). Đóng phim đã lâu nhưng tới năm 2008, ở tuổi 43, Robert Downey Jr. mới thực sự trở thành ngôi sao phim ảnh hạng A của Hollywood. Danh hiệu Nhân vật giải trí của năm 2008 do Entertainment Weekly bình chọn khép lại một năm thành công của Robert Downey Jr. Hồi tháng 5/2008, anh đã được tạp chí TIME đưa vào danh sách 100 nhân vật ảnh hưởng nhất thế giới 2008.',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 4,
      image: 'upload/actor/ChrisHemsworth.jpg',
      name: 'Chris Hemsworth',
      dateOfBirth: '08/11/1983',
      placeOfBirth: 'Melbourne, Victoria, Australia',
      description: 'Hemsworth được sinh ra ở Melbourne, Australia, cha mẹ anh là Leonie và Craig Hemsworth. Gia đình anh sau đó di cư đến một nông trại ở Northern Territory. Anh học trung học tại Heathmont Secondary College và ít năm sau lại chuyển đến đảo Phillip. Chris rất thích lướt sóng và chơi thể thao. Năm 2004, anh đi diễn thử vai Robbie Hunter cho Home and Away nhưng thất bại. Sau đó, anh được gọi đến để nhận vai Kim Hyde. Anh đã thành công với vai diễn Kim Hyde và chuyển đến Sydney để tham gia dàn diễn viên Home and Away, xuất hiện trong 171 tập của series này. Sau đó kết thúc vai diễn vào ngày 3/7/2007. Hemsworth đã nhận được 2 đề cử giải Logie và thắng 1 giải cho hạng mục "Tài năng mới được yêu thích nhất" trong Home and Away vào năm 2005. Hemsworth tiếp tục vào vai cha của James T. Kirk, tức George Kirk, trong những cảnh đầu của bộ phim Star Trek năm 2009. Anh còn vào vai Kale trong bộ phim kinh dị A Perfect Getaway vào cùng năm. Trong bộ phim năm 2010 CA$h, Hemsworth đóng vai Sam Phelan, một thanh niên trẻ gặp vấn đề về tài chính. CA$h đánh dấu sự ra mắt của Hemsworth ở Hollywood, vì nó là bộ phim đầu tiên anh quay ở Mỹ. Trong những buổi phỏng vấn ở hậu trường, đạo diễn Stephen Milburn Anderson cho biết Hemsworth chỉ ở Mỹ được 6 tuần khi anh diễn thử vai. Anderson nói: "Đây là một anh chàng trẻ tuổi, có ngoại hình phù hợp, một diễn viên giỏi và rất đẹp trai. Cho nên chúng tôi không thể bỏ qua anh ấy. Tôi thực sự rất ấn tượng". Tháng 11/2010 The Hollywood Reporter cho rằng Hemsworth là một trong những diễn viên trẻ sắp thành sao hạng A ở Hollywood. MTV Networks\' NextMovie.com phong anh là một trong những \'ngôi sao đột phá đáng gờm trong năm 2011\'. Sau đó, Hemsworth thủ vai chính trong một bộ phim kinh dị The Cabin in the Woods và vai Jed Eckert trong bản làm lại phim Red Dawn, nhưng cả hai bộ phim đều không công chiếu trong năm 2011. Thay vào đó, vai diễn giúp Hemsworth tạo tiếng vang là vị thần Thor trong bộ phim về nhân vật siêu anh hùng cùng tên trong Marvel Comics. Ban đầu, người em trai của anh là Liam được chọn cho vai diễn này, còn Chris thì bị loại, nhưng anh lại giành được vai diễn sau khi đạo diễn Kenneth Branagh quyết định xem xét lại các ứng viên trước đó. Hemsworth vào lại vai Thor trong phim The Avengers, cũng dựa trên một bộ truyện tranh của Marvel nói về một nhóm siêu anh hùng hợp sức lại để cứu lấy Trái Đất, được dự kiến sẽ công chiếu vào năm 2012. Sau đó, anh tham gia bộ phim Snow White & the Huntsman cùng Charlize Theron và Kristen Stewart. Đồng thời chuẩn bị xuất hiện trong phim Shadow Runner và Thor 2. AskMen.com đã xếp Hemsworth đứng thứ 28 trong top 49 người đàn ông gây ảnh hưởng nhất năm 2011.',
      createdAt: now,
      updatedAt: now
    },
    {
      id: 5,
      image: 'upload/actor/TomHiddleston.jpg',
      name: 'Tom Hiddleston',
      dateOfBirth: '02/09/1981',
      placeOfBirth: 'Westminster, London, England, UK',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actors', null, {});
  }
};

