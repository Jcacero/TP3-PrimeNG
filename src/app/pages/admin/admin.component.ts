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

  autos:string[] = [
    "https://fotos.perfil.com//2019/10/07/900/0/cuales-son-los-autos-mas-potentes-del-mundo-788463.jpg",
    "https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg",
    "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4GSUPRZXXREO7A3YKFIT3W2RMM.jpg",
    "https://autotest.com.ar/wp-content/uploads/2021/06/AUTOS-MAS-CAROS-DEL-MUNDO-BUGATTI-DIVO-PORTADA.jpg",  
  ]

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
