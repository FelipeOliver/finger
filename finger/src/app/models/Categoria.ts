export class Categoria {

    _descricao: string;
    _cor: string;
    _imagem: string;

    constructor() { }

    get descricao() {
        return this._descricao;
    }
    get cor() {
        return this._cor;
    }
    get imagem() {
        return this._imagem;
    }

    set descricao( descricao: string ) {
        this._descricao = descricao;
    }
    set cor( cor: string ) {
        this._cor = cor;
    }
    set imagem( imagem: string ) {
        this._imagem = imagem;
    }
}