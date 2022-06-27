import { Component, ENVIRONMENT_INITIALIZER, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']

  
})
export class PerfilComponent implements OnInit {
      
   
    public miUsuario:Usuario;

    constructor()
    {        
   
    
   

    }
    enviar(nuevoNombre: HTMLInputElement, nuevoApellido: HTMLInputElement,nuevoCorreo: HTMLInputElement,nuevoURL: HTMLInputElement )
{
  console.log(this.miUsuario.nombre);
  this.miUsuario.nombre = nuevoNombre.value;  
  console.log(this.miUsuario.nombre);  
  this.miUsuario.apellidos = nuevoApellido.value; 
  this.miUsuario.correo = nuevoCorreo.value;   
  this.miUsuario.url = nuevoURL.value;   
   
}
  ngOnInit(): void {
  }

}

