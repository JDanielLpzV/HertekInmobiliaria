import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { TerrenosInterface } from '../models/terrenos';
import { DepartamentosInterface } from '../models/departamentos';
import { CasasInterface } from '../models/casas';
import { EdificiosInterface } from '../models/edificios';
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
  private departamentos: Observable<DepartamentosInterface[]>;
  private departamentosCollection: AngularFirestoreCollection<DepartamentosInterface>;
  private departamento: Observable<DepartamentosInterface>;
  private departamentoDoc: AngularFirestoreDocument<DepartamentosInterface>;
  private edificiosCollection: AngularFirestoreCollection<EdificiosInterface>;
  private edificios: Observable<EdificiosInterface[]>;
  private edificioDoc: AngularFirestoreDocument<EdificiosInterface>;
  private edificio: Observable<EdificiosInterface>;
  public selectedCasa: CasasInterface = { Id: null };
  public selectedTerreno: TerrenosInterface = { Id: null };
  public selectedDepartamento: DepartamentosInterface = { Id: null };
  public selectedEdificio: EdificiosInterface = { Id: null };


  constructor(private afs: AngularFirestore) {

    this.terrenosCollection = afs.collection<TerrenosInterface>('terrenos')
    this.terrenos = this.terrenosCollection.valueChanges();

    this.ngOnInit(afs);
  }

  ngOnInit(afs2: AngularFirestore) {
    this.casasCollection = afs2.collection<CasasInterface>('casas')
    this.casas = this.casasCollection.valueChanges();

    this.departamentosCollection = afs2.collection<DepartamentosInterface>('departamentos')
    this.departamentos = this.departamentosCollection.valueChanges();

    this.edificiosCollection = afs2.collection<EdificiosInterface>('edificios')
    this.edificios = this.edificiosCollection.valueChanges();
  }
  addCasas(casas: CasasInterface): void {
    this.casasCollection.add(casas);
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
  //Departamentos************************/
  addDepartamentos(departamentos: DepartamentosInterface): void {
    this.departamentosCollection.add(departamentos);
  }
  getAllDepartamentos() {
    return this.departamentos = this.departamentosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as DepartamentosInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getDepartamento(idDepartamento: string) {
    this.departamentoDoc = this.afs.doc<DepartamentosInterface>(`departamentos/${idDepartamento}`);
    return this.departamento = this.departamentoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as DepartamentosInterface;
        data.Id = action.payload.id;
        return data;
      }
    }));
  }
  updateDepartamentos(departamento: DepartamentosInterface): void {
    let idDepartamento = departamento.Id;
    this.departamentoDoc = this.afs.doc<DepartamentosInterface>(`departamentos/${idDepartamento}`);
    this.departamentoDoc.update(departamento);
  }
  deleteDepartamentos(idDepartamento: string): void {
    this.departamentoDoc = this.afs.doc<DepartamentosInterface>(`departamentos/${idDepartamento}`);
    this.departamentoDoc.delete();
  }
  /**Edificios *********/
  addEdificios(edificios: EdificiosInterface): void {
    this.edificiosCollection.add(edificios);
  }
  getAllEdificios() {
    return this.edificios = this.edificiosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EdificiosInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getEdificio(idEdificio: string) {
    this.edificioDoc = this.afs.doc<EdificiosInterface>(`edificios/${idEdificio}`);
    return this.casa = this.edificioDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as EdificiosInterface;
        data.Id = action.payload.id;
        return data;
      }
    }));
  }
  updateEdificios(edificio: CasasInterface): void {
    let idEdificio = edificio.Id;
    this.edificioDoc = this.afs.doc<EdificiosInterface>(`edificios/${idEdificio}`);
    this.edificioDoc.update(edificio);
  }
  deleteEdificios(idEdificio: string): void {
    this.edificioDoc = this.afs.doc<EdificiosInterface>(`edificios/${idEdificio}`);
    this.edificioDoc.delete();
  }
}
