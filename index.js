//index.js file is the entry point for our application. we require express and the controlleer module.
var express = require('express');
var todoController = require('./controller/todoController');

//set up the app using express
var app = express();

//set up template view engine
app.set('veiw engine', 'ejs');

//static files set up using the built in middelware called express.static
app.use('/public/asset', express.static('./public/asset'));

//fire controllers
todoController(app)
//listen to port
app.listen(3000, function(){
  console.log('App is listening on port 3000...');
});

