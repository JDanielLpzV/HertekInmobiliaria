import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { DepartamentosInterface } from '../../../models/departamentos';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detail-departamentos',
  templateUrl: './detail-departamentos.component.html',
  styleUrls: ['./detail-departamentos.component.css']
})
export class DetailDepartamentosComponent implements OnInit {

  constructor(public dataApi: DataApiService, public route: ActivatedRoute) { }
  public departamento: DepartamentosInterface = {};
  ngOnInit() {
    const idDepartamento = this.route.snapshot.params['idDepartamento'];
    this.getDetalles(idDepartamento)
  }
  getDetalles(idDepartamento: string): void {
    this.dataApi.getDepartamento(idDepartamento).subscribe(departamento => {
      this.departamento = departamento;
    });
  }


}
