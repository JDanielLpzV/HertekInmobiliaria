import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { TerrenosInterface } from '../../models/terrenos';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListInmueblesComponent } from '../list-inmuebles/list-inmuebles.component';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-modalterrenos',
  templateUrl: './modalterrenos.component.html',
  styleUrls: ['./modalterrenos.component.css'],
  providers: [AuthService]
})
export class ModalterrenosComponent implements OnInit {
  public hijo: ListInmueblesComponent;
  constructor(public dataApi: DataApiService, public authService: AuthService) { }
  public userCorreo: string = null;
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  @Input() correo_registro: string;
  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;

      }
    })
  }
  onSaveTerreno(terrenoForm: NgForm): void {
    if (terrenoForm.value.Id == null) {
      // New 
      terrenoForm.value.correo_registro = this.userCorreo;
      this.dataApi.addTerrenos(terrenoForm.value);
    } else {
      // Update
      this.dataApi.updateTerrenos(terrenoForm.value);
    }
    terrenoForm.resetForm();
    this.btnClose.nativeElement.click();
  }
}
