import { Component } from '@angular/core';
import { AlertaService } from './servicios/alerta.service';
import { LibrosService } from './servicios/libros.service';
import { UsuariosService } from './servicios/usuarios.service';
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    
    constructor (private servicioLibros:LibrosService) {}
    
    
    ngOnInit() {
        console.log(this.servicioLibros.obtenerLibros().pipe(map(action=>{
          action.map(a=>{
            a.payload.doc.data()
          })
        })))
    }    
}
