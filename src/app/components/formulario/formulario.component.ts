import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output()items = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  agregarItems(value:string){
    
  }

}
