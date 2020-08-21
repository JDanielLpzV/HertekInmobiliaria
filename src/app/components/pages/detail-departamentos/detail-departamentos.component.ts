import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { DepartamentosInterface } from '../../../models/departamentos';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-departamentos',
  templateUrl: './detail-departamentos.component.html',
  styleUrls: ['./detail-departamentos.component.css'],
  providers: [AuthService]
})
export class DetailDepartamentosComponent implements OnInit {

  constructor(public dataApi: DataApiService, public route: ActivatedRoute, public authService: AuthService, private http: HttpClient, private router: Router) { }
  public departamento: DepartamentosInterface = {};
  public href: string = "";
  public userCorreo: string = null;
  ngOnInit() {
    this.href = window.location.href;
    this.getCurrentUser();
    const idDepartamento = this.route.snapshot.params['idDepartamento'];
    this.getDetalles(idDepartamento)
  }
  getDetalles(idDepartamento: string): void {
    this.dataApi.getDepartamento(idDepartamento).subscribe(departamento => {
      this.departamento = departamento;
    });
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;
      }
    })
  }
  httpPost() {
    if (this.userCorreo != null) {
      this.http.post("https://formspree.io/xrgyvygl",
        {
          "_subject": "Departamento",
          "message": "Estoy interesado en el siguiente departamento:  " + this.href,
          "_replyto": this.userCorreo
        })
        .subscribe(
          (val) => {
            console.log("POST call successful value returned in body",
              val);
            window.alert("Nos pondremos en contacto contigo lo antes posible para asesorarte");
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");

          });
    }
    else {
      window.alert("Ingresa sesión para poder realizar está acción");
    }
  }

}
