import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios:Usuarios[];


  constructor() { 
    this.usuarios = [
      {nombreUsuario:"Macarena",contraseña:"Maca123"},
      {nombreUsuario:"Juan",contraseña:"juan123"},
      {nombreUsuario:"Ramiro",contraseña:"megustaelpalo1212"}
    ]
  }

  getUsers(){
    return this.usuarios;
  }
}
