import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from 'src/app/shared/servicio.service';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit { 

  public books:Libro[];
  constructor(public servicioService: ServicioService,public usuarioService: UsuarioService) {
 
   }   
      
   public enviar(  nuevoTitulo: HTMLInputElement,nuevoTipo: HTMLInputElement,nuevoAutor: HTMLInputElement,
      nuevoPrecio: HTMLInputElement,nuevoPhoto: HTMLInputElement )
      
  {
      
    let nuevoLibro = new Libro (0,this.usuarioService.usuario.id_usuario,nuevoTitulo.value, nuevoTipo.value,nuevoAutor.value,
       nuevoPrecio.valueAsNumber, nuevoPhoto.value);
    this.servicioService.add(nuevoLibro).subscribe((data:Libro) =>{
      console.log(data)
    })     
  }
  ngOnInit(): void {
  }
  
  }

