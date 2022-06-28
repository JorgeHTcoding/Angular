import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Registro } from 'src/app/models/registro';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
public myForm: FormGroup;
public usuario: Usuario;
public registro: Registro;
public passCheck: string = "Las contraseñas no coinciden";

  constructor(public usuarioService: UsuarioService) { 
    this.usuario = new Usuario("","","","","");
    this.registro = new Registro(this.usuario,"")
  }  
  onSubmit(form:NgForm){
    console.log(form.value)
    console.log(this.usuario)
    if(this.usuario.password != this.registro.pass2){
      console.log("Las contraseñas no coinciden")
    }else{
      this.usuarioService.registrar(this.usuario).subscribe((data:Usuario)=>{
        console.log(data)
      })
    }
  }
  ngOnInit(): void {
  }

}
