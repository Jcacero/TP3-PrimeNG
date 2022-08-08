import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicios/alerta.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private servicio2:AlertaService, private servicioUsuarios:UsuariosService) { }

  ngOnInit(): void {
  }

  mostrar(){
    this.servicio2.mostrarAlerta("estoy siendo llamado desde el appComponent")
  }

}
