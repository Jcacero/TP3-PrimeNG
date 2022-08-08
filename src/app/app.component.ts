import { Component } from '@angular/core';
import { UsuariosService } from './servicios/usuarios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    
    constructor (private servicioUsuarios:UsuariosService) {}
    
    usuarios=this.servicioUsuarios.getUsers();

    ngOnInit() {
      console.log(this.usuarios)
    }    
}
