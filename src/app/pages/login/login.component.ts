import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public usuario:Usuario;
  constructor(public usuarioService: UsuarioService, private router:Router) { 
    this.usuario = new Usuario ("","","","","")
  }

  onSubmit(form:NgForm){
    this.usuarioService.login(this.usuario).subscribe((data:any)=>{
      if(data.error==true){
        this.usuarioService.logueado = false;
        this.usuarioService.usuario = null;        
      }else{
        this.usuarioService.logueado = true;
        this.usuarioService.usuario = data.result[0];   
        this.router.navigateByUrl('/showBook')
      }
    })
  }
  // public runLogin(correo:HTMLInputElement,password:HTMLInputElement){
  //   console.log("login inicializado")
  //  // creamos un nuevo usuario con los valores de los del formulario de login para poder pasarlos por el body 
  //     let usuario:Usuario = new Usuario("","",correo.value,"",password.value);  
  //     //lo linkeamos con el usuarioService a la función login del mismo que ya nos lo enlaza con el backend siendo
  //     //usamos el subscribe para subscribirnos al observador y cambiar los valores de logueado y demás funciones      
  //     this.usuarioService.login(usuario).subscribe((data:any)=>{  
  //       console.log(data)
  //       if(data.error == true) {
         
  //       this.usuarioService.logueado = false;  
  //       //accedemos e igualamos el usuario del service al valor de data en la posición 0 (que es todo el conjunto de error = false + el usuario que saca de la BBDD)      
  //       this.usuarioService.usuario =null;   
  //       //hacemos condicionales para que en caso de que si entre por condición de error == false que significa que corre y pass coinciden nos redireccione a la pagina
  //       //showBook a través de la funcionalidad angular del router.navigateByUrl('directorio al que queramos ir')
  //       }else{
  //         this.usuarioService.logueado = true;
  //         this.usuarioService.usuario = data.result[0];
  //         this.router.navigateByUrl('/showBook')
  //       }
        
        
  //     })
        
  //     console.log("enviamos")
   
  
  ngOnInit(): void {
  }

}
