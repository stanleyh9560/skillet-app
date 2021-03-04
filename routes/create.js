/*
 * GET create recipe page.
 */

exports.view = function(req, res){
  res.render('create');
};

var data = require("../data.json");

exports.createRecipe = function(request, response) {
	// Your code goes here
  var recipe = request.body;
  data.recipes.push(recipe);
}
