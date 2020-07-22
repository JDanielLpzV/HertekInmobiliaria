import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CasasInterface } from '../../models/casas';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListCasasComponent } from '../list-casas/list-casas.component';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [AuthService]
})
export class ModalComponent implements OnInit {
  public hijo: ListCasasComponent;
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
  onSaveCasa(casaForm: NgForm): void {
    if (casaForm.value.Id == null) {
      // New 
      // localitoForm.value.userUid = this.userUid;
      casaForm.value.correo_registro = this.userCorreo;
      this.dataApi.addCasas(casaForm.value);
    } else {
      // Update
      this.dataApi.updateCasas(casaForm.value);
    }
    casaForm.resetForm();
    this.btnClose.nativeElement.click();
  }
}
