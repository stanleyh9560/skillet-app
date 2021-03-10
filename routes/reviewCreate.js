var data = require('../data_recipes_all.json');
var data2 = require('../data_recipes_created.json');
/*
 * GET review created recipe page.
 */

exports.view = function(req, res){
  // Get index of the most recent recipe
  var index = data2.created.length-1;

  // Get data of the most recent recipe
  var nameToShow = data2.created[index]['name'];
  var ing = data2.created[index]['ingredients'];
  var inst = data2.created[index]['instructions'];
  var img = data2.created[index]['imageURL'];

  // Render recipe on page
  res.render('reviewCreate', {
    'name': nameToShow,
    'ingredients': ing,
    'instructions': inst,
    'imageURL': img
  });
};

exports.viewCreated = function(req, res) {
  var nameToShow = req.params.name;
  var ing;
  var inst;
  var img;

  // Find recipe in created JSON data
  for (var key in data2.created) {
    if (data2.created[key]['name'] == nameToShow) {
      ing = data2.created[key]['ingredients'];
      inst = data2.created[key]['instructions'];
      img = data2.created[key]['imageURL'];
    }
  }

  res.render('reviewCreate', {
    'name': nameToShow,
    'ingredients': ing,
    'instructions': inst,
    'imageURL': img
  });
}

exports.deleteRecipe = function(req, res) {
  var nameToShow = req.body.name;

  // Delete recipe for created JSON data
  for (var key in data2.created) {
    if (data2.created[key]['name'] == nameToShow) {
      data2.created.splice(key, 1);
    }
  }
  // Delete recipe from all JSON data
  for (var key in data.recipes) {
    if (data.recipes[key]['name'] == nameToShow) {
      data.recipes.splice(key, 1);
    }
  }
}
