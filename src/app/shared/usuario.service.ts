import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario }  from '../models/usuario'
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn : 'root'
})
export class UsuarioService {
  private url:string;
  public logueado:boolean;
  public usuario: Usuario;

  constructor(private http: HttpClient) { 
    this.logueado = false;
  }
    registrar(usuario:Usuario){
      this.url ="http://localhost:3000/registro";
      console.log(this.url +"aqui url")      
      console.log(usuario.nombre + "este es el nombre del usuario en el service");
      return this.http.post<Usuario>(this.url,usuario)
    
     
    }
    login(usuario:Usuario){
      console.log(usuario)
      console.log(usuario.nombre + "este es el nombre del usuario en el service");
      this.url ="http://localhost:3000/login";     
      return this.http.post(this.url,usuario)
    }          
  }
