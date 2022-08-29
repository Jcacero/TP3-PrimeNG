import { Component, Input, OnInit} from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/servicios/libros.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() datosCard: Libro[]

  constructor(private servicioLibros:LibrosService) { }

  ngOnInit(): void {
    
  }

  textoBoton:string;
  libroSeleccionado:Libro;
  libro=new FormGroup({
    titulo:new FormControl('',Validators.required),
    autor:new FormControl('',Validators.required),
    editorial:new FormControl('',Validators.required),
    ISBN:new FormControl(0,Validators.required),
  })

  modalVisible:boolean=false;

  agregarLibro(){
    if(this.libro.valid){
      let nuevoLibro:Libro ={
        titulo:this.libro.value.titulo!,
        autor:this.libro.value.autor!,
        editorial:this.libro.value.editorial!,
        ISBN:this.libro.value.ISBN,
        id_libro:""
      }

      

      this.servicioLibros.crearLibro(nuevoLibro).then((libro)=>{
        alert("El libro fue agregado con éxito");
      })
      .catch((error)=>{
        alert("El libro no pudo ser cargado\n Error:"+error);
      })
    }
    else{
      alert("El formulario no está comlpeto")
    }
  }

  editarLibro(){
    this.servicioLibros.modificarLibro(this.libroSeleccionado.id_libro,this.libroSeleccionado).then(m=>{
      alert("funcionaa")
    })
  }

  mostrarDialogo(){
    this.textoBoton="Agregar Libro"
    this.modalVisible=true;
  }
  mostrarEditar(libroSeleccionado:Libro){
    this.libroSeleccionado=libroSeleccionado
    this.textoBoton="Editar Libro"
    this.modalVisible=true;
    this.libro.setValue({
      titulo:libroSeleccionado.titulo,
      autor:libroSeleccionado.autor,
      editorial:libroSeleccionado.editorial,
      ISBN:libroSeleccionado.ISBN,
    })
  }

  cargarDatos(){
    if(this.textoBoton==="Agregar Libro"){
      this.agregarLibro()
    }
    else if (this.textoBoton==="Editar Libro"){
      this.editarLibro()
    }
  }

}
