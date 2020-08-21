import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})
export class CasasComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }

  public casas = [];
  public casa = '';
  metodo = '';
  lugar = '';
  cuartos = '';
  banos = '';
  autos = '';
  precio = '';
  codigo = '';
  ubicacion = '';
  area = '';
  metros = '';
  ngOnInit() {

    this.dataApi.getAllCasas().subscribe(casas => {
      this.casas = casas;
      if (this.casas.length == 0) {
        window.alert("No se encuentran viviendas por el momento")
        this.router.navigate(['']);

      }
    });
  }

}
