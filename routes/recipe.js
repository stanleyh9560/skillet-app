var data = require('../data_recipes_all.json');
/*
 * GET review created recipe page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.name;
  var ing;
  var inst;
  var img;
  //console.log("name is " + nameToShow);

  for (var key in data.recipes) {
    if (data.recipes[key]['name'] == nameToShow) {
      ing = data.recipes[key]['ingredients'];
      inst = data.recipes[key]['instructions'];
      img = data.recipes[key]['imageURL'];
    }
  }

  res.render('recipe', {
    'name': nameToShow,
    'ingredients': ing,
    'instructions': inst,
    'imageURL': img
  });
};
