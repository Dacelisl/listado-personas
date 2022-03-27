import { Injectable } from '@angular/core';
import * as firebase from '@firebase/auth';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  token: string = '';

  constructor(private router: Router) {}

  login(email: string, passw: string) {
    return firebase
      .signInWithEmailAndPassword(firebase.getAuth(), email, passw)
      .then((response) => {
        firebase
          .getAuth()
          .currentUser?.getIdToken()
          .then((token) => {
            this.token = token;
            this.router.navigate(['/']);
          });
      })
      .catch((e) => {
        console.log('error: ', e.mensaje);
      });
  }
  logOut() {
    firebase
      .getAuth()
      .signOut()
      .then(() => {
        this.token = '';
        this.router.navigate(['/login']);
      })
      .catch((e) => console.log('error', e));
  }
  getIdToken() {
    return this.token;
  }
  isLogin() {
    return this.token != '';
  }
}
