import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { DepartamentosInterface } from '../../../models/departamentos';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-edificios',
  templateUrl: './detail-edificios.component.html',
  styleUrls: ['./detail-edificios.component.css'],
  providers: [AuthService]
})
export class DetailEdificiosComponent implements OnInit {
  constructor(public dataApi: DataApiService, public route: ActivatedRoute, public authService: AuthService, private http: HttpClient, private router: Router) { }
  public edificio: DepartamentosInterface = {};
  public href: string = "";
  public userCorreo: string = null;
  ngOnInit() {
    this.href = window.location.href;
    this.getCurrentUser();
    const idEdificio = this.route.snapshot.params['idEdificio'];
    this.getDetalles(idEdificio)
  }
  getDetalles(idEdificio: string): void {
    this.dataApi.getEdificio(idEdificio).subscribe(edificio => {
      this.edificio = edificio;
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
          "_subject": "Edificio",
          "message": "Estoy interesado en el siguiente edificio:  " + this.href,
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
