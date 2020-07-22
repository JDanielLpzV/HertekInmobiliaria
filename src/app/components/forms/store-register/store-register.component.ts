import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { LocalitoInterface } from '../../../models/localito';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.css']
})
export class StoreRegisterComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private localitos: LocalitoInterface = {};
  ngOnInit() {
  }
  getListLocalitos() {

  }

}
