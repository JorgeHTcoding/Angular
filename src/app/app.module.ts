import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { CodigolibroPipe } from './pipes/codigolibro.pipe';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdatebookComponent } from './pages/updatebook/updatebook.component';
import { ShowbookComponent } from './pages/showbook/showbook.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, ROUTES } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    PerfilComponent,
    LibrosComponent,
    CodigolibroPipe,
    AddbookComponent,
    UpdatebookComponent,
    ShowbookComponent,
    LoginComponent, 
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
