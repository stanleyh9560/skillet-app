/*
 * GET create recipe page.
 */

exports.view = function(req, res){
  res.render('create');
};

var data = require("../data_recipes_all.json");
var data2 = require("../data_recipes_created.json");

exports.createRecipe = function(request, response) {
	// Your code goes here
  var recipe = request.body;
  data.recipes.push(recipe);
  data2.created.push(recipe);
}
