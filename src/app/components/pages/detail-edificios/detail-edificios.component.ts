import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { DepartamentosInterface } from '../../../models/departamentos';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detail-edificios',
  templateUrl: './detail-edificios.component.html',
  styleUrls: ['./detail-edificios.component.css']
})
export class DetailEdificiosComponent implements OnInit {
  constructor(public dataApi: DataApiService, public route: ActivatedRoute) { }
  public edificio: DepartamentosInterface = {};
  ngOnInit() {
    const idEdificio = this.route.snapshot.params['idEdificio'];
    this.getDetalles(idEdificio)
  }
  getDetalles(idEdificio: string): void {
    this.dataApi.getEdificio(idEdificio).subscribe(edificio => {
      this.edificio = edificio;
    });
  }
}
