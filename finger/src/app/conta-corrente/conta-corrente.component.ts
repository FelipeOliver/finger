import { Component, OnInit } from '@angular/core';
import { Transacao } from '../models/Transacao';
import { Categoria } from '../models/Categoria';
import { ContaCorrenteService } from '../services/ContaCorrenteService';
import { Http } from '@angular/http';

@Component({
  selector: 'app-conta-corrente',
  templateUrl: './conta-corrente.component.html',
  styleUrls: [
    './conta-corrente.component.css'
  ]
})
export class ContaCorrenteComponent implements OnInit {

  contaCorrenteService: ContaCorrenteService;

  lancamentos: Transacao[] = [];

  constructor( http: Http ) {
    this.contaCorrenteService = new ContaCorrenteService(http)
  }
  
  ngOnInit() {
    this.contaCorrenteService.getCategorias()
    .subscribe(categorias => this.lancamentos = categorias.json());
  }

  // getCategorias() {
  //   return this.http.get('http://localhost:3000/categorias');
  // }
}
