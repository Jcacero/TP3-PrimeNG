import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestore } from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libroCollection:AngularFirestoreCollection<Libro>

  constructor(private db:AngularFirestore) {
      this.libroCollection= db.collection('libros')
  }


  obtenerLibros(){
    return this.libroCollection.snapshotChanges()
  }
}
