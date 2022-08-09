import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuarios=this.servicioUsuarios.getUsers();

  constructor(private servicioUsuarios:UsuariosService ) { }

  ngOnInit(): void {

  }

  agregarUsuarios(){
    let usu: Usuarios
    let nombre = prompt("Ingrese nombre de usuario") as string
    let contra = prompt("Ingrese contraseña usuario") as string
    usu = {nombreUsuario:nombre, contrasena:contra}
    this.servicioUsuarios.addUsers(usu)
  }

 

}
