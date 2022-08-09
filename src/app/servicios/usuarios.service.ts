import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios:Usuarios[];


  constructor() { 
    this.usuarios = [
      {nombreUsuario:"Macarena",contrasena:"Maca123"},
      {nombreUsuario:"Juan",contrasena:"juan123"},
      {nombreUsuario:"Ramiro",contrasena:"megustaelpalo1212"},
      {nombreUsuario:"Teo",contrasena:"Pelado11"}
    ]
  }

  getUsers(){
    return this.usuarios;
  }
  addUsers(usuario:Usuarios){
    this.usuarios.push(usuario)
  }
  
}
