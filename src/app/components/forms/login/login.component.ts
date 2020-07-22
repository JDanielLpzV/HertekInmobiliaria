import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async onGoogleLogin() {
    try {
      this.authSvc.loginGoogle()
    } catch (error) {
      console.log(error);

    }
  }
  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.router.navigate(['']);
      }// else if (user) {
      //   this.router.navigate(['/confirmacion']);
      // } 
      else {
        alert("Usuario no registrado o datos incorrectos")
      }
    }
    catch (error) {
      console.log(error);

    }
  }
}
