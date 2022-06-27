import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private url:string;
  public libro:Libro;
  constructor(private http: HttpClient) {
  }

  getAll(id_usuario:number):Observable<Object>{
    console.log(id_usuario + " Esta es la ID de usuario")  
    this.url ="http://localhost:3000/libros" ;     
    console.log(id_usuario + " AQUI ID USUARIO SERVICE")
    return this.http.get(this.url+"?id_usuario="+ id_usuario)
  }         

  getOne(id_usuario:number,id_libro:number):Observable<Object>{ 
    this.url="http://localhost:3000/libros"
    console.log("aqui2")
    return this.http.get(this.url + "?id_libro=" + id_libro + "&id_usuario=" + id_usuario);
  }

  add(libro:Libro):Observable<Object>{
    console.log(libro)  
    this.url ="http://localhost:3000/libros"
    console.log("aqui3")
    return this.http.post(this.url,libro)
  }

  edit(nuevolibro:Libro):Observable<Object>{    
    this.url ="http://localhost:3000/libros"
    console.log("aqui3")
    console.log(nuevolibro)
    return this.http.put(this.url,nuevolibro)
  }
  
  delete(id_libro:number){
    this.url = "http://localhost:3000/libros?id_libro=" +id_libro
    console.log("aqui4")
    console.log(id_libro + " ESTA ES LA ID DE LIBRO EN EL SERVICE")
    return this.http.delete(this.url)
  }
}

