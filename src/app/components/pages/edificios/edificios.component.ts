import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edificios',
  templateUrl: './edificios.component.html',
  styleUrls: ['./edificios.component.css']
})
export class EdificiosComponent implements OnInit {
  constructor(private dataApi: DataApiService, private router: Router) { }
  public edificios = [];
  public edificio = '';
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
    this.dataApi.getAllEdificios().subscribe(edificios => {
      this.edificios = edificios;
      if (this.edificios.length == 0) {
        window.alert("No hay edificios en existencia")
        this.router.navigate(['']);

      }
    });
  }

}
