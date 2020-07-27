import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { DepartamentosInterface } from '../../models/departamentos';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListInmueblesComponent } from '../list-inmuebles/list-inmuebles.component';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-modaldepartamentos',
  templateUrl: './modaldepartamentos.component.html',
  styleUrls: ['./modaldepartamentos.component.css'],
  providers: [AuthService]
})
export class ModaldepartamentosComponent implements OnInit {
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
  onSaveDepartamento(departamentoForm: NgForm): void {
    console.log("llegue");

    if (departamentoForm.value.Id == null) {
      departamentoForm.value.correo_registro = this.userCorreo;
      this.dataApi.addDepartamentos(departamentoForm.value);
      console.log("pase2");

    } else {
      // Update
      this.dataApi.updateDepartamentos(departamentoForm.value);
    }
    departamentoForm.resetForm();
    this.btnClose.nativeElement.click();
  }


}
