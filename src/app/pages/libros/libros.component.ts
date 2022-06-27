import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

 
  public miLibro:Libro[];

  constructor()
  {        
 
 

  }
  enviar( nuevoIDUsuario: HTMLInputElement, nuevoTitulo: HTMLInputElement,nuevoTipo: HTMLInputElement,nuevoAutor: HTMLInputElement,nuevoPrecio: HTMLInputElement,nuevoPhoto: HTMLInputElement )
{
  let nuevoLibro = new Libro (0,nuevoIDUsuario.valueAsNumber,nuevoTitulo.value, nuevoTipo.value,nuevoAutor.value, nuevoPrecio.valueAsNumber, nuevoPhoto.value);
  this.miLibro.push(nuevoLibro)
 
}
ngOnInit(): void {
}

}
