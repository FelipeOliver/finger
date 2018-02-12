//Configs
var app = require('./config/express')();
var consign = require('consign');

require('./config/mongo.config.js');

consign({cwd: 'app'})
    .include('models')
    .then('services')
    .then('routes')
    .into(app);

app.listen(3000, function(){
    console.log('Servidor iniciado');
});