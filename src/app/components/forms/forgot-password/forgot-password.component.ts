import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [AuthService]
})
export class ForgotPasswordComponent implements OnInit {
  userEmail = new FormControl('');
  constructor(public authSvc: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  async onReset() {
    try {
      const email = this.userEmail.value
      await this.authSvc.resetPassword(email);
      window.alert('Correo enviado, revisa tu bandeja')
      this.router.navigate(['/ingresar'])
    } catch (error) {
      console.log(error);
      this.router.navigate([''])
    }
  }
}
