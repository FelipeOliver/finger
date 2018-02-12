module.exports = (function(app){
    let self= this;
    
    app.get('/lancamentos', app.services.lancamentoService.getAll); 
})