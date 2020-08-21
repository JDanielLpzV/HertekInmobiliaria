import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { TerrenosInterface } from '../../../models/terrenos';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-terrenos',
  templateUrl: './detail-terrenos.component.html',
  styleUrls: ['./detail-terrenos.component.css'],
  providers: [AuthService]
})
export class DetailTerrenosComponent implements OnInit {
  constructor(public dataApi: DataApiService, public route: ActivatedRoute, public authService: AuthService, private http: HttpClient, private router: Router) { }
  public terreno: TerrenosInterface = {};
  public href: string = "";
  public userCorreo: string = null;
  ngOnInit() {
    this.href = window.location.href;
    this.getCurrentUser();
    const idTerreno = this.route.snapshot.params['idTerreno'];
    this.getDetalles(idTerreno)
  }
  getDetalles(idTerreno: string): void {
    this.dataApi.getTerreno(idTerreno).subscribe(terreno => {
      this.terreno = terreno;
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
          "_subject": "Terreno",
          "message": "Estoy interesado en el siguiente terreno:  " + this.href,
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
