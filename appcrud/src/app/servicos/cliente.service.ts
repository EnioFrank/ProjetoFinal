import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Cliente{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
}
@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private url = 'http://localhost/apiAppCrud/apiCliente.php';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }
}