import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore } from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libroCollection:AngularFirestoreCollection<Libro>

  constructor(private db:AngularFirestore) {
      this.libroCollection= db.collection('libros');
  }


  obtenerLibros(){
    return this.libroCollection.snapshotChanges().pipe(
      map(action=> action.map(a=>a.payload.doc.data()))
    )
  }

   crearLibro(nuevoLibro:Libro){
    return new Promise(async (resolve,reject)=>{
      try{
        const id = this.db.createId();
        nuevoLibro.id_libro = id ;
        const resultado= await this.libroCollection.doc(id).set(nuevoLibro);
        resolve(resultado);
      }
      catch(error){
        reject(error);
      }
    })
  
 
  }
}
