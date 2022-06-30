import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/shared/servicio.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  @Input() cardPadre:Libro;
  @Output() eventoCard = new EventEmitter<Number>();
  constructor() {    
  }
  
  deleteLibro(){
    console.log(this.cardPadre.id_libro)
    this.eventoCard.emit(this.cardPadre.id_libro)
  
  }

  ngOnInit(): void {
  }

}
