import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from 'src/app/shared/servicio.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})

export class UpdatebookComponent implements OnInit {

  public books:Libro[];
  constructor(public servicioService: ServicioService) {
 
   }      
    
    enviar( nuevoIDLibro: HTMLInputElement, nuevoTitulo: HTMLInputElement,nuevoTipo: HTMLInputElement,nuevoAutor: HTMLInputElement,nuevoPrecio: HTMLInputElement,nuevoPhoto: HTMLInputElement,nuevoIdUsuario: HTMLInputElement )
  {   
        
    let nuevoLibro = new Libro (nuevoIdUsuario.valueAsNumber, nuevoIDLibro.valueAsNumber,nuevoTitulo.value, nuevoTipo.value,nuevoAutor.value,
       nuevoPrecio.valueAsNumber, nuevoPhoto.value, );
    this.servicioService.edit(nuevoLibro).subscribe((data:Libro) =>{
      this.books.push(data)
     
    })     
  
  }
  ngOnInit(): void {
  }
  
}
