import { Component, OnInit, Input } from '@angular/core';
import { Transacao } from '../../models/Transacao';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.scss']
})
export class LancamentoComponent implements OnInit {

  tipoReceita: string = 'receita';
  tipoDivida: string = 'divida';

  @Input() transacao: Transacao;

  constructor() { }

  ngOnInit() {
    console.log(this.transacao);
  }

  getStatus( tipo: string, isEfetuado: boolean ) {
    let prefixo = isEfetuado ? '' : 'Não foi ';
    let texto = tipo == this.tipoReceita ? 'recebido' : 'pago';

    return prefixo + texto;
  }

  getCorValor( tipo: string ){
    return tipo == this.tipoDivida ? 'text-danger' : 'text-success';
  }

  getCorFaixaStatus( isEfetuado: boolean ) {
    return isEfetuado ? 'bg-success' : 'bg-danger';
  } 

  getBgCard(  tipo: string  ) {
    return tipo == this.tipoDivida ? 'text-danger' : 'text-success';
  }
}
