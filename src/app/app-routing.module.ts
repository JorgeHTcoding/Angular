import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdatebookComponent } from './pages/updatebook/updatebook.component';
import { ShowbookComponent } from './pages/showbook/showbook.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
 
  {path:"", component: HomeComponent}, 
  {path:"registro", component: RegistroComponent },
  {path: "perfil", component: PerfilComponent},
  {path: "libros", component: LibrosComponent},
  {path: "addBook", component:AddbookComponent},
  {path: "updateBook", component:UpdatebookComponent},
  {path: "showBook", component:ShowbookComponent},
  {path: "login", component:LoginComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
