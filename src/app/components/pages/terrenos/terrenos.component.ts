import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terrenos',
  templateUrl: './terrenos.component.html',
  styleUrls: ['./terrenos.component.css']
})
export class TerrenosComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }
  public terrenos = [];
  public terrneo = '';
  metodo = '';
  lugar = '';
  precio = '';
  codigo = '';
  ubicacion = '';
  area = '';
  metros = '';
  agua = ''
  luz = ''
  ngOnInit() {
    this.dataApi.getAllTerrenos().subscribe(terrenos => {
      this.terrenos = terrenos;
      if (this.terrenos.length == 0) {
        window.alert("No se encuentran viviendas por el momento")
        this.router.navigate(['']);

      }
    });

  }


}
