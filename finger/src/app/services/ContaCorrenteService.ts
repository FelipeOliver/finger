import { Injectable } from "@angular/core";

import { Http } from '@angular/http';

@Injectable()
export class ContaCorrenteService {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    getCategorias() {
        return this.http.get('http://localhost:3000/lancamentos');
    }
}