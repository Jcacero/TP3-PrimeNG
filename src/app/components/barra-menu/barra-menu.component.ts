import { Component, OnInit } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import { AlertaService } from 'src/app/servicios/alerta.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {
    usuarios=this.servicioUsuarios.getUsers();
    adminVisible=false;

  items: MegaMenuItem[];

  
  constructor(private servicio2:AlertaService, private servicioUsuarios:UsuariosService ) { 
    
  }

  ngOnInit(): void {

    this.items = [
        {
          label: 'Home', icon: 'pi pi-fw pi-home',
          routerLink:"home"
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',  
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
        },
        {
            label: 'Admin', icon: 'pi pi-fw pi-users',
            visible:this.adminVisible,
            routerLink:"admin"
        },
    ]

    console.log(this.usuarios)
  }

  verificarUsuario(){
    this.usuarios.forEach(usuario => {
      if(usuario.nombreUsuario=="Juan"){

        if(usuario.contrasena=="juan123"){
          this.adminVisible = true;
          this.ngOnInit()
        }
      }
    })
  }
  mostrar(){
    this.servicio2.mostrarAlerta("estoy siendo llamado desde el appComponent")
    this.verificarUsuario()
  }

}
