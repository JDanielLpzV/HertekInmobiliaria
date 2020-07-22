import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-terrenos',
  templateUrl: './terrenos.component.html',
  styleUrls: ['./terrenos.component.css']
})
export class TerrenosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public terrenos = [];
  public terrneo = '';
  ngOnInit() {
    this.dataApi.getAllTerrenos().subscribe(terrenos => {
      this.terrenos = terrenos;
    });
    console.log(this.terrenos);

  }


}
