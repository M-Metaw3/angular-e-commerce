import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { signInWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  currentuser$ = authState(this.auth);
  userID: string | undefined = undefined;

  constructor(private auth: Auth) {
    this.updateUseID()
  }

  login(username: any, password: any): Observable<UserCredential> {
    let res: Observable<UserCredential> =
      from(signInWithEmailAndPassword(this.auth, username, password));
    this.updateUseID();
    return res;
  }

  updateUseID() {
    this.currentuser$.subscribe(e => {
      this.userID = e?.uid;
    })
  }

  signUp(name: any, email: any, password: any) {
    let res: Observable<void> =
      from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
        switchMap(({ user }) => updateProfile(user, { displayName: name })));
    return res;
  }


  logout() {
    this.userID = undefined;
    return from(this.auth.signOut());
  }
}
