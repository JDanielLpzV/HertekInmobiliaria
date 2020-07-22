import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) { }

  async loginGoogle() {
    try {
      return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }
  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);

    }
  }
  /*
  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.auth.currentUser).sendEmailVerification();
  }
  */

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch (error) {
      console.log(error)
    }

  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      // this.sendVerificationEmail();
      return result;
    }
    catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.auth.signOut();

    }
    catch (error) {
      console.log(error);
    }
  }
  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }
}
