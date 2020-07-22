import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css'],
  providers: [AuthService]
})
export class ClientRegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.router.navigate(['']);
        // this.router.navigate(['/confirmacion']);
      }
    } catch (error) {
      console.log(error);

    }

  }

}
