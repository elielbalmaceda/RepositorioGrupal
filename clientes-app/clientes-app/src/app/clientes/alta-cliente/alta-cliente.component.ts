import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../clientes.service';
import { Cliente, Grupo } from './../cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  //Propiedades 
  cliente!: Cliente; 
  grupos: Grupo[] = []; //Array de grupo inicalizado sin ningun valor

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }
}
