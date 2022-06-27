import { Component, OnInit } from '@angular/core';
//no te olvides de los routers jorgito
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
//no te olvides de los routers jorgito
export class HeaderComponent implements OnInit {
  constructor(public usuarioService : UsuarioService, private router : Router) {    
    
   }

   goLogin(){
    this.router.navigateByUrl('/login')
   }

  ngOnInit(): void {
  }

}
