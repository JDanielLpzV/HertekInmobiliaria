import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { CasasInterface } from '../../../models/casas';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detail-casas',
  templateUrl: './detail-casas.component.html',
  styleUrls: ['./detail-casas.component.css']
})
export class DetailCasasComponent implements OnInit {

  constructor(public dataApi: DataApiService, public route: ActivatedRoute) { }
  public casa: CasasInterface = {};
  ngOnInit() {
    const idCasa = this.route.snapshot.params['idCasa'];
    this.getDetalles(idCasa)
  }
  getDetalles(idCasa: string): void {
    this.dataApi.getCasa(idCasa).subscribe(casa => {
      this.casa = casa;
    });
  }

}
