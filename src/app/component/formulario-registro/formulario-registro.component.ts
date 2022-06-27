import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }
  registrarse(nombre:HTMLInputElement,apellidos:HTMLInputElement,correo:HTMLInputElement,url:HTMLInputElement, password:HTMLInputElement, verifyPass:HTMLInputElement){
    console.log("aquillegamos")
    if(password.value == verifyPass.value){      
      let usuario:Usuario = new Usuario(nombre.value, apellidos.value,correo.value,url.value,password.value)
      console.log(nombre.value + "aqui el nombre")
      this.usuarioService.registrar(usuario).subscribe((data)=>{
        console.log(data)
      })
      console.log("enviamos")
    }else{
      console.log("Las contraseñas no coinciden")
    }
  }
  ngOnInit(): void {
  }

}
