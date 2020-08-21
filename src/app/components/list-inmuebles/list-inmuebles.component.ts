import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { TerrenosInterface } from '../../models/terrenos';
import { CasasInterface } from '../../models/casas';
import { EdificiosInterface } from '../../models/edificios';
import { DepartamentosInterface } from '../../models/departamentos';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-inmuebles',
  templateUrl: './list-inmuebles.component.html',
  styleUrls: ['./list-inmuebles.component.css'],
  providers: [AuthService]
})
export class ListInmueblesComponent implements OnInit {
  constructor(public dataApi: DataApiService, public authService: AuthService) { }
  filterPost = '';

  public userCorreo: string = null;
  public casa: CasasInterface = {}
  public casas: CasasInterface[];
  public terreno: TerrenosInterface = {}
  public terrenos: TerrenosInterface[];
  public edificio: EdificiosInterface = {}
  public edificios: EdificiosInterface[];
  public departamento: DepartamentosInterface = {}
  public departamentos: DepartamentosInterface[];
  ngOnInit(): void {
    this.getListCasas();
    this.getListTerrenos();
    this.getListEdificios();
    this.getListDepartamentos();
    this.getCurrentUser();

  }
  getListCasas() {
    this.dataApi.getAllCasas().subscribe(casas => {
      this.casas = casas;
    });
  }
  onDeleteCasa(idCasa: string) {
    const confirmacion = confirm("¿Estas seguro de eliminar el registro?");
    if (confirmacion) {
      this.dataApi.deleteCasas(idCasa);
    }
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;
      }
    })
  }
  onPreUpdateCasa(casa: CasasInterface) {
    this.dataApi.selectedCasa = Object.assign({}, casa);
  }

  getListTerrenos() {
    this.dataApi.getAllTerrenos().subscribe(terrenos => {
      this.terrenos = terrenos;
    });
  }
  onDeleteTerreno(idTerreno: string) {
    const confirmacion = confirm("¿Estas seguro de eliminar el terreno?");
    if (confirmacion) {
      this.dataApi.deleteTerrenos(idTerreno);
    }
  }
  onPreUpdateTerreno(terreno: TerrenosInterface) {
    this.dataApi.selectedTerreno = Object.assign({}, terreno);
  }

  getListEdificios() {
    this.dataApi.getAllEdificios().subscribe(edificios => {
      this.edificios = edificios;
    });
  }
  onDeleteEdificio(idEdificio: string) {
    const confirmacion = confirm("¿Estas seguro de eliminar el edificio?");
    if (confirmacion) {
      this.dataApi.deleteEdificios(idEdificio);
    }
  }
  onPreUpdateEdificio(edificio: EdificiosInterface) {
    this.dataApi.selectedEdificio = Object.assign({}, edificio);
  }

  getListDepartamentos() {
    this.dataApi.getAllDepartamentos().subscribe(departamentos => {
      this.departamentos = departamentos;
    });
  }
  onDeleteDepartamento(idDepartamento: string) {
    const confirmacion = confirm("¿Estas seguro de eliminar el departamento?");
    if (confirmacion) {
      this.dataApi.deleteDepartamentos(idDepartamento);
    }
  }
  onPreUpdateDepartamento(departamento: DepartamentosInterface) {
    this.dataApi.selectedDepartamento = Object.assign({}, departamento);
  }
}
