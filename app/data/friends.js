// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Angela Rye",
    photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/160929114834-rye-angela-head-shot-large-169.jpg",
    scores: ["5","1","4","4","2","4","1","5","5","3"]
  },
  {
    name: "Angela Simmons",
    photo: "https://dhair-boutique.com/wp-content/uploads/2015/10/3.png",
    scores: ["4","2","3","1","2","5","1","2","2","3"]
  },
  {
    name: "Jennifer Lopez",
    photo: "https://yt3.ggpht.com/-8KSyswkxG7s/AAAAAAAAAAI/AAAAAAAAAAA/yImi4BXLjz4/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    scores: ["2","4","2","2","4","2","3","3","3","1"]
  },
  {
    name: "Janet Jackson",
    photo: "https://upload.wikimedia.org/wikipedia/commons/0/02/JanetJacksonUnbreakableTourSanFran2015.jpg",
    scores: ["1","4","2","5","1","2","5","1","1","5"]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;