import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicios/alerta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private miServicio:AlertaService) { }

  ngOnInit(): void {
  }

  lanzarDialogo(){
    this.miServicio.mostrarAlerta("HOLA PROFEEE")
  }

}
