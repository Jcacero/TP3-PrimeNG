import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  texto="hola soy un texto"
  @Output () datos = new EventEmitter<string>();
  @Input() misImagenes:string[]

  constructor() { }

  agregarItem(value:string){
    this.datos.emit(value);
  }
 
  ngOnInit(): void {
  }

}
