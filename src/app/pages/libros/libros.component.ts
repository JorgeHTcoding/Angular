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
 
  this.miLibro =[ new Libro(0,0,"EL nombre del Viento","Tapa Dura","Patrick Rothfuss",29,"https://images-na.ssl-images-amazon.com/images/I/51TOF2gV8fL._SX327_BO1,204,203,200_.jpg"),
                  new Libro(1,1,"El Temor de un Hombre Sabio","Tapa Blanda","Patrick Rothfuss",25,"https://images-na.ssl-images-amazon.com/images/I/51G8QRMulEL._SX327_BO1,204,203,200_.jpg"),
                  new Libro(1,1,"El Temor de un Hombre Sabio","Tapa Blanda","Patrick Rothfuss",25,"https://images-na.ssl-images-amazon.com/images/I/51G8QRMulEL._SX327_BO1,204,203,200_.jpg")
                  
  ]

  }
  enviar(nuevoIDLibro: HTMLInputElement, nuevoIDUsuario: HTMLInputElement, nuevoTitulo: HTMLInputElement,nuevoTipo: HTMLInputElement,nuevoAutor: HTMLInputElement,nuevoPrecio: HTMLInputElement,nuevoPhoto: HTMLInputElement )
{
  let nuevoLibro = new Libro (nuevoIDLibro.valueAsNumber , nuevoIDUsuario.valueAsNumber,nuevoTitulo.value, nuevoTipo.value,nuevoAutor.value, nuevoPrecio.valueAsNumber, nuevoPhoto.value);
  this.miLibro.push(nuevoLibro)
 
}
ngOnInit(): void {
}

}
