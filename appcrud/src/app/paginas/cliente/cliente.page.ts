import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/servicos/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  clientes: Cliente[];
  constructor() { }

  ngOnInit() {
  }

}