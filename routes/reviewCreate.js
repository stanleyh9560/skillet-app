var data = require('../data.json');
/*
 * GET review created recipe page.
 */

exports.view = function(req, res){
  // Get index of the most recent recipe
  var index = data.length-1;

  // Get data of the most recent recipe
  var nameToShow = data[index]['name'];
  var ing = data[index]['ingredients'];
  var inst = data[index]['instructions'];
  var img = data[index]['imageURL'];
  // console.log("name is " + nameToShow);

  /* // To find recipe that matches name
  for (var key in data) {
    if (data[key]['name'] == nameToShow) {
      ing = data[key]['ingredients'];
      inst = data[key]['instructions'];
      img = data[key]['imageURL'];
    }
  }*/

  // Render recipe on page
  res.render('reviewCreate', {
    'name': nameToShow,
    'ingredients': ing,
    'instructions': inst,
    'imageURL': img
  });
};
