module.exports = (function(){
    var mongoose = require('mongoose');

    var database = {
        url: "mongodb://localhost:27017/finger",
        mongoOptions: {
            db: { safe: true },
            user: "",
            pass: ""
        }
    }

    mongoose.connect(database.url, (err, res) => {
        if (err) {
            throw new Error('Conexão mal sucedida no BD: ' + err);
        } else {
           console.log('Conectado com sucesso'); 
        }
    });

    return mongoose;
}())