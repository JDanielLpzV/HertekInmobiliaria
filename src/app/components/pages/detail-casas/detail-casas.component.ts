import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { CasasInterface } from '../../../models/casas';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-casas',
  templateUrl: './detail-casas.component.html',
  styleUrls: ['./detail-casas.component.css'],
  providers: [AuthService]
})
export class DetailCasasComponent implements OnInit {

  constructor(public dataApi: DataApiService, public route: ActivatedRoute, public authService: AuthService, private http: HttpClient, private router: Router) { }
  public casa: CasasInterface = {};
  public href: string = "";
  public userCorreo: string = null;
  ngOnInit() {
    this.href = window.location.href;
    this.getCurrentUser();
    const idCasa = this.route.snapshot.params['idCasa'];
    this.getDetalles(idCasa)
  }
  getDetalles(idCasa: string): void {
    this.dataApi.getCasa(idCasa).subscribe(casa => {
      this.casa = casa;
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
          "_subject": "Vivienda",
          "message": "Estoy interesado en la siguiente vivienda:  " + this.href,
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
