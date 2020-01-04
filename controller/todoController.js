// This contoller helps to handle the routes, rendeering of views and passing of data
module.exports = function(app){

  app.get('/todo', function(req, res){
    res.render('todo.ejs');

  });

  app.post('./todo', function(req, res){

  });

  app.delete('/todo', function(req, res){

  });
};