var data = require('../data.json');
/*
 * GET review created recipe page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.name;
  var ing;
  var inst;
  var img;
  console.log("name is " + nameToShow);

  for (var key in data) {
    if (data[key]['name'] == nameToShow) {
      ing = data[key]['ingredients'];
      inst = data[key]['instructions'];
      img = data[key]['imageURL'];
    }
  }

  res.render('reviewCreate', {
    'name': nameToShow,
    'ingredients': ing,
    'instructions': inst,
    'imageURL': img
  });
};
