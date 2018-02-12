let mongoose = require('mongoose');

let schema = mongoose.Schema({
    "id": {type: Number, required: true},
    "descricao": {type: String, required: true},
    "valor": {type: Number, required: true},
    "isEfetuado": {type: Boolean, required: true},
    "dataVencimento": {type: Date, required: true},
    "dataPagamento": {type: Date, required: false},
    "tipo": {type: String, required: true},
    "categoria": {type: Object, required: true}
});

mongoose.model('lacamento', schema); 