import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { TerrenosInterface } from '../../../models/terrenos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-terrenos',
  templateUrl: './detail-terrenos.component.html',
  styleUrls: ['./detail-terrenos.component.css']
})
export class DetailTerrenosComponent implements OnInit {
  constructor(public dataApi: DataApiService, public route: ActivatedRoute) { }
  public terreno: TerrenosInterface = {};
  ngOnInit() {
    const idTerreno = this.route.snapshot.params['idTerreno'];
    this.getDetalles(idTerreno)
  }
  getDetalles(idTerreno: string): void {
    console.log(idTerreno);

    this.dataApi.getTerreno(idTerreno).subscribe(terreno => {
      this.terreno = terreno;
    });
  }


}
