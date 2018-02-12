var mongoose = require('mongoose');

module.exports = function(app) {

    let self = {};

    let model = mongoose.model('lacamento');

    self.getAll = function(req, res) {
        console.log('getAll - Lancamentos')
        model.find()
        .then( function( lacamentos ) {
            res.json(lacamentos);
        }, function(error) {
            throw new Error('Erro ao buscar trasacoes no BD: ' + error);
        });
        
    }


    model.create(
        { 
            "id" : 2, 
            "descricao" : "Hotdog", 
            "valor" : 8, 
            "isEfetuado" : true, 
            "dataVencimento" : Date("2018-03-03T03:00:00Z"), 
            "dataPagamento" : Date("2018-03-03T03:00:00Z"), 
            "tipo" : "divida", 
            "categoria" : {
                "cor": "default",
                "imagem": "img-raquete",
                "descricao": "Lazer"
            }
        });
    
    return self;
}