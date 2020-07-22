import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { TerrenosInterface } from '../models/terrenos';
import { CasasInterface } from '../models/casas';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private terrenos: Observable<TerrenosInterface[]>;
  private terrenosCollection: AngularFirestoreCollection<TerrenosInterface>;
  private terreno: Observable<TerrenosInterface>;
  private terrenoDoc: AngularFirestoreDocument<TerrenosInterface>;
  private casasCollection: AngularFirestoreCollection<CasasInterface>;
  private casas: Observable<CasasInterface[]>;
  private casaDoc: AngularFirestoreDocument<CasasInterface>;
  private casa: Observable<CasasInterface>;
  public selectedCasa: CasasInterface = { Id: null };
  public selectedTerreno: TerrenosInterface = { Id: null };

  constructor(private afs: AngularFirestore) {

    this.terrenosCollection = afs.collection<TerrenosInterface>('terrenos')
    this.terrenos = this.terrenosCollection.valueChanges();
    this.ngOnInit(afs);
  }

  ngOnInit(afs2: AngularFirestore) {
    this.casasCollection = afs2.collection<CasasInterface>('casas')
    this.casas = this.casasCollection.valueChanges();
  }
  addCasas(casa: CasasInterface): void {
    this.casasCollection.add(casa);
  }
  getAllCasas() {
    return this.casas = this.casasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CasasInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getCasa(idCasa: string) {
    this.casaDoc = this.afs.doc<CasasInterface>(`casas/${idCasa}`);
    return this.casa = this.casaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as CasasInterface;
        data.Id = action.payload.id;
        return data;
      }
    }));
  }
  updateCasas(casa: CasasInterface): void {
    let idCasa = casa.Id;
    this.casaDoc = this.afs.doc<CasasInterface>(`casas/${idCasa}`);
    this.casaDoc.update(casa);
  }
  deleteCasas(idCasa: string): void {
    this.casaDoc = this.afs.doc<CasasInterface>(`casas/${idCasa}`);
    this.casaDoc.delete();
  }

  //Terrenos*************************************************
  addTerrenos(terreno: TerrenosInterface): void {
    this.terrenosCollection.add(terreno);
  }

  getAllTerrenos() {
    return this.terrenos = this.terrenosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as TerrenosInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getTerreno(idTerreno: string) {
    this.terrenoDoc = this.afs.doc<TerrenosInterface>(`terrenos/${idTerreno}`);
    return this.terreno = this.terrenoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as TerrenosInterface;
        data.Id = action.payload.id;
        return data;
      }
    }));
  }
  getTerrenos() {
    return this.terrenos = this.terrenosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as TerrenosInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }
  updateTerrenos(terreno: TerrenosInterface): void {
    let idTerreno = terreno.Id;
    this.terrenoDoc = this.afs.doc<TerrenosInterface>(`terrenos/${idTerreno}`);
    this.terrenoDoc.update(terreno);
  }
  deleteTerrenos(idTerreno: string): void {
    this.terrenoDoc = this.afs.doc<TerrenosInterface>(`terrenos/${idTerreno}`);
    this.terrenoDoc.delete();
  }
}
