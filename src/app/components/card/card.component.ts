import { Component, Input, OnInit} from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/servicios/libros.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() datosCard: Libro[]

  constructor(private servicioLibros:LibrosService, private servicioStorage: StorageService) { }

  ngOnInit(): void {
    
  }

  textoBoton:string;
  libroSeleccionado:Libro;
  eliminarVisible:boolean=false;
  imagen:string;
  nombreImagen:string;

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
        img:"",
        ISBN:this.libro.value.ISBN,
        id_libro:""
      }

      this.servicioStorage.subirImagen(this.nombreImagen,this.imagen)
      .then(
        async res=>{
          this.servicioStorage.obtenerUrlImagen(res).
          then(
            async url=>{
              await this.servicioLibros.crearLibro(nuevoLibro,url).then((libro)=>{
                alert("El libro fue agregado con éxito");
              })
              .catch((error)=>{
                alert("El libro no pudo ser cargado\n Error:"+error);
              })
            }
          )
        }
      )
    }
    else{
      alert("El formulario no está comlpeto")
    }
  }

  editarLibro(){
    let datos:Libro ={
      titulo:this.libro.value.titulo!,
      autor:this.libro.value.autor!,
      editorial:this.libro.value.editorial!,
      img:this.libro.value.img!,
      ISBN:this.libro.value.ISBN,
      id_libro:this.libroSeleccionado.id_libro
    }
    this.servicioLibros.modificarLibro(this.libroSeleccionado.id_libro,datos).then(libro=>{
      alert("El libro fue modificado con exito")
    })
    .catch((error)=>{
      alert("No se pudo modificar el libro \n Error:"+error)
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
      img:libroSeleccionado.img
    })
  }
  cargarDatos(){
    if(this.textoBoton==="Agregar Libro"){
      this.agregarLibro()
    }
    else if (this.textoBoton==="Editar Libro"){
      this.editarLibro()
    }
    this.modalVisible = false;
    this.libro.reset();
  }

  mostrarEliminar(libroSeleccionado:Libro){
    this.libroSeleccionado = libroSeleccionado
    this.eliminarVisible = true;
  }
  borrarLibro(){
    this.servicioLibros.eliminarLibro(this.libroSeleccionado.id_libro).then((resp)=>{
      alert("El libro fue eliminado con éxito")
    })
    .catch((error)=>{
      alert("El libro no pudo ser eliminado \n Error:"+error)
    })
    this.eliminarVisible = false
  }

  cargarImagen(event:any){
    let archivo=event.target.files[0];
    let  reader=new FileReader();
    if(archivo!=undefined){
      reader.readAsDataURL(archivo)
      reader.onloadend = () =>{
        let url = reader.result
        if(url!=null){
          this.nombreImagen = archivo.name
          this.imagen=url.toString()
        }
      }
    }
  }



}
