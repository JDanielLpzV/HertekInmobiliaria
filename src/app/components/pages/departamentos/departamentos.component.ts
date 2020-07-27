import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  constructor(private dataApi: DataApiService, private router: Router) { }
  public departamentos = [];
  public departamento = '';
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
    this.dataApi.getAllDepartamentos().subscribe(departamentos => {
      this.departamentos = departamentos;
      if (this.departamentos.length == 0) {
        window.alert("No hay departamentos en existencia")
        this.router.navigate(['']);
      }
      console.log(this.departamentos);

    });
  }

}
