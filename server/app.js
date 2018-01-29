//Configs
var app = require('./config/express')();

var firebase = require('./config/firebase.config')();
var database = firebase.database();
//https://finger-5bfcf.firebaseio.com/
var routesProdutos = require('./app/routes/categoriaRoutes')(app);

app.listen(3000, function(){
    console.log('Teste');
});