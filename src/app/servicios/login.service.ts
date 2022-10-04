import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private servicioUsuarios:UsuariosService) {}

  usuarios=this.servicioUsuarios.getUsers()

  login(){
    let losUsuarios=this.usuarios;
    let resp=false;
    losUsuarios.forEach(usuario => {
      if(usuario.nombreUsuario==="Juan"){
        if(usuario.contrasena==="juan123"){
          alert("Se inicio Sesion Correctamente")
          resp= true;
        }
      }
    })
    return resp
  }
  
}
