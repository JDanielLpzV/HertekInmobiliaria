import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { EdificiosInterface } from '../../models/edificios';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListInmueblesComponent } from '../list-inmuebles/list-inmuebles.component';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-modaledificios',
  templateUrl: './modaledificios.component.html',
  styleUrls: ['./modaledificios.component.css'],
  providers: [AuthService]
})
export class ModaledificiosComponent implements OnInit {

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
  onSaveEdificio(edificioForm: NgForm): void {
    if (edificioForm.value.Id == null) {
      // New 
      edificioForm.value.correo_registro = this.userCorreo;
      this.dataApi.addEdificios(edificioForm.value);
    } else {
      // Update
      this.dataApi.updateEdificios(edificioForm.value);
    }
    edificioForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
