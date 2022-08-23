import { Component, Input, OnInit} from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() datosCard: Libro[]

  constructor() { }

  ngOnInit(): void {
    
  }

}
