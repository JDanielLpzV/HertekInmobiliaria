import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [AuthService],
})
export class NavBarComponent {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router: Router) { }
  async onLogOut() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }

  }
}
