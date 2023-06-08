import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent {



  productos: any = [

    { nombre: 'arroz', categoria: 'cereal' },
    { nombre: 'inka cola', categoria: 'gaseosa' },
    { nombre: 'fanta', categoria: 'gaseosa' },
    { nombre: 'coca cola', categoria: 'gaseosa' },
    { nombre: 'leche gloria', categoria: 'lacteos' },
    { nombre: 'arroz', categoria: 'cereal' },
    { nombre: 'inka cola', categoria: 'gaseosa' },
    { nombre: 'fanta', categoria: 'gaseosa' },
    { nombre: 'coca cola', categoria: 'gaseosa' },
    { nombre: 'leche gloria', categoria: 'lacteos' },
    
  ]

}
