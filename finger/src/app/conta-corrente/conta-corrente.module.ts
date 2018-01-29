import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContaCorrenteComponent } from './conta-corrente.component';
import { LancamentoComponent } from './lancamento/lancamento.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpModule
  ],
  declarations: [
    ContaCorrenteComponent,
    LancamentoComponent
  ],
  exports:[
    ContaCorrenteComponent
  ]
})
export class ContaCorrenteModule { }
