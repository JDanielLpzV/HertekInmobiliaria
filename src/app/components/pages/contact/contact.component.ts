import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacto = new FormGroup({
    _replyto: new FormControl(''),
    message: new FormControl(''),
    phone: new FormControl('')
  });
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  httpPost() {
    const { _replyto, message, phone } = this.contacto.value;
    this.http.post("https://formspree.io/xrgyvygl",
      {
        "message": message + " - " + phone,
        "_replyto": _replyto
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
          window.alert("Mensaje enviado correctamente, nos pondremos en contacto contigo lo antes posible");
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");


        });
  }
}
