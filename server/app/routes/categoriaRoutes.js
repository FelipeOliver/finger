module.exports = (function(app){
    app.get('/categorias', function(req, res){
        let json = [
            {
                "id": 1,
                "descricao": "Rolê",
                "valor": 10.0,
                "isEfetuado": false,
                "dataVencimento": new Date(2018, 2, 1),
                "dataPagamento": undefined,
                "tipo": "receita",
                "categoria": {
                    "cor": "default",
                    "imagem": "img-raquete",
                    "descricao": "Lazer"
                }
            },
            {
                "id": 2,
                "descricao": "Hotdog",
                "valor": 8.0,
                "isEfetuado": true,
                "dataVencimento": new Date(2018, 2, 3),
                "dataPagamento": new Date(2018, 2, 3),
                "tipo": "divida",
                "categoria": {
                    "cor": "default",
                    "imagem": "img-raquete",
                    "descricao": "Alimentação"
                }
            }
        ]
        res.send(json);
    })
})