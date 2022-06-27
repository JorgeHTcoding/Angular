import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/shared/servicio.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Libro } from 'src/app/models/libro';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { observable } from 'rxjs';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {
  public books: Libro[];

  constructor(public servicioService: ServicioService, public usuarioService: UsuarioService) {

  }

  enviar(id_libro: HTMLInputElement) {
    this.books = [];    
    console.log(this.usuarioService.usuario.id_usuario + " id usuario dentro del enviar")
    if (id_libro.valueAsNumber) {     
      console.log(id_libro.value )    
      this.servicioService.getOne(this.usuarioService.usuario.id_usuario, id_libro.valueAsNumber).subscribe((data: Libro[]) => {
        for (let i = 0; i < data.length; i++) 
        if(data[i].id_libro == id_libro.valueAsNumber){
          this.books.push(data[i])
        }
        console.log(data)
      })
    } else {
      this.servicioService.getAll(this.usuarioService.usuario.id_usuario).subscribe((data: Libro[]) => {
        for (let i = 0; i < data.length; i++)          
          this.books.push(data[i])
        
        console.log(data)
      })

    }
  }

  eliminar(id_libro: HTMLInputElement) {
    this.books = [];
    let IDlibro: number = id_libro.valueAsNumber;
    console.log(IDlibro + "dentro del enviar")
    if (id_libro != null) {
      this.servicioService.delete(IDlibro).subscribe((data:Libro[]) => {
        console.log(data)
      })

    }
  }

  // enviar1(idInput1: HTMLInputElement, idInput2: HTMLInputElement)    
  // {
  // this.books = [];
  // let IDlibro:number = idInput1.valueAsNumber ;  
  // let IDlibro:number = idInput2.valueAsNumber ;
  // console.log(IDlibro)
  // console.log(IDlibro) 
  // this.servicioService.getOne(IDlibro,IDlibro).subscribe((data:Libro[])=>{
  //   for(let i = 0; i <data.length;i++){
  //     this.books.push(data[i])
  //   }
  //   console.log(data)
  // })

  // } 




  //  deleteOne(libro: string):void{

  //   let id = parseInt(libro)
  //   this.servicioService.delete(id)  

  //  }

  ngOnInit(): void {
  }


}