import { Categoria } from "./Categoria";

export class Transacao{

    private _id:             number;
    private _descricao:      string;
    private _valor:          number;
    private _isEfetuado:     boolean;
    private _dataVencimento: Date;
    private _dataPagamento:  Date;
    private _categoria:      Categoria;
    private _tipo:           string;

    constructor(){
        
    }

    get id(){
        return this._id;
    }
    get descricao(){
        return this._descricao;
    }
    get valor(){
        return this._valor;
    }
    get isEfetuado(){
        return this._isEfetuado;
    }
    get dataVencimento(){
        return this._dataVencimento;
    }
    get dataPagamento(){
        return this._dataPagamento;
    }
    get categoria() {
        return this._categoria;
    }
    get tipo(){
        return this._tipo;
    }

    set id( id: number ) {
        this._id = id;
    }
    set descricao( descricao: string ) {
        this._descricao = descricao;
    }
    set valor( valor: number ) {
        this._valor = valor;
    }
    set isEfetuado( isEfetuado: boolean ) {
        this._isEfetuado = isEfetuado;
    }
    set dataVencimento( dataVencimento: Date ) {
        this._dataVencimento = dataVencimento;
    }
    set dataPagamento( dataPagamento: Date ) {
        this._dataPagamento = dataPagamento;
    }
    set categoria( categoria: Categoria ) {
        this._categoria = categoria;
    }
    set tipo( tipo: string ) {
        this._tipo = tipo;
    }

}