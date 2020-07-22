import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CasasInterface } from '../../models/casas';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-casas',
  templateUrl: './list-casas.component.html',
  styleUrls: ['./list-casas.component.css'],
  providers: [AuthService]
})
export class ListCasasComponent implements OnInit {

  constructor(public dataApi: DataApiService, public authService: AuthService) { }
  public userCorreo: string = null;
  // public isAdmin: any = null;
  public casa: CasasInterface = {}
  public casas: CasasInterface[];

  ngOnInit(): void {
    this.getListCasas();
    this.getCurrentUser();

  }
  getListCasas() {
    this.dataApi.getAllCasas().subscribe(casas => {
      this.casas = casas;
    });
  }
  onDeleteLocalito(idCasa: string) {
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

}
