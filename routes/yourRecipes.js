/*
 * GET your recipe page.
 */
var saved = require('../data_recipes_saved.json');
var created = require('../data_recipes_created.json');

exports.view = function(req, res){
  res.render('yourRecipes', {
  "recipes": [saved, created]
  });
};
