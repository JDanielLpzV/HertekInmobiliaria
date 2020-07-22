import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

import { TerrenosInterface } from '../../models/terrenos';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-terrenos',
  templateUrl: './list-terrenos.component.html',
  styleUrls: ['./list-terrenos.component.css'],
  providers: [AuthService]
})
export class ListTerrenosComponent implements OnInit {

  constructor(public dataApi: DataApiService, public authService: AuthService) { }
  public userCorreo: string = null;
  public terreno: TerrenosInterface = {}
  public terrenos: TerrenosInterface[];
  ngOnInit(): void {
    this.getListTerrenos();
    this.getCurrentUser();
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
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;

      }
    })
  }

  onPreUpdateTerreno(terreno: TerrenosInterface) {
    this.dataApi.selectedTerreno = Object.assign({}, terreno);
  }

}

