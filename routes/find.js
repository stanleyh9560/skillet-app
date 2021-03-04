var recipes = require('../data_recipes_all.json');
/*
 * GET find recipe page.
 */

exports.view = function(req, res){
    res.render('find', recipes);
  };
