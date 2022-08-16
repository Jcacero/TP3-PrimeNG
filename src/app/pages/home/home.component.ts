import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicios/alerta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flores:string [] =[
    "https://img.freepik.com/foto-gratis/hermoso-arreglo-papel-tapiz-flores_23-2149057015.jpg?w=2000",
    "https://s1.eestatic.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-tierra_-planeta_499960581_154305912_1706x960.jpg",
    "https://media.admagazine.com/photos/621ee61a062f5da55f742157/master/w_1600%2Cc_limit/geranio.jpg",
    "https://www.florespedia.com/Imagenes/flores-bonitas.jpg",
  ]

  constructor(private miServicio:AlertaService) { }

  ngOnInit(): void {
  }

  lanzarDialogo(){
    this.miServicio.mostrarAlerta("HOLA PROFEEE")
  }
  imprimirTexto(item:string){
    alert(item)
  }


}
