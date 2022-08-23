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
}
