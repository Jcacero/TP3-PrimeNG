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
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                    },
                    {
                        label: 'User 2',
                        items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                    },
                    {
                        label: 'User 4',
                        items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                    },
                    {
                        label: 'User 6',
                        items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                    },
                    {
                        label: 'Event 2',
                        items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                    },
                    {
                        label: 'Event 4',
                        items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                    },
                    {
                        label: 'Setting 2',
                        items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                    },
                    {
                        label: 'Setting 3',
                        items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                    }
                ]
            ]
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
