var recipes = require('../data.json');
/*
 * GET find recipe page.
 */

exports.view = function(req, res){
    res.render('find', recipes);
  };
