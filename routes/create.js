/*
 * GET create recipe page.
 */
 var data = require("../data_recipes_all.json");
 var data2 = require("../data_recipes_created.json");

exports.view = function(req, res){
  res.render('create');
};

exports.createRecipe = function(req, res) {
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

  // Your code goes here
  var recipe = req.body;
  data.recipes.push(recipe);
  data2.created.push(recipe);
}

exports.edit = function(req, res) {
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

  res.render('create', {
    'name': nameToShow,
    'ingredients': ing,
    'instructions': inst,
    'imageURL': img,
    'editCreated': true
  });
}
