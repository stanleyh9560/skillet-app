/*
 * GET create recipe page.
 */

exports.view = function(req, res){
  res.render('create');
};
/*
var data = require("../data.json");

exports.createRecipe = function(request, response) {
	// Your code goes here
  var name = request.body.recipeName;
  var ingredients = request.body.ingredients;
  var instructions = request.body.instructions;
  console.log("The name is: " + name);
  var newRecipe = {
    "name": name,
    "ingredients": ingredients,
    "instructions": instructions,
    "imageURL": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    }
  data.push(newRecipe);
}
*/
