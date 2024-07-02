import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public authStatus: Observable<boolean>;
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';

  constructor() {
    const isAuthenticated = localStorage.getItem(this.TOKEN_KEY) === 'true';
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(isAuthenticated);
    this.authStatus = this.isAuthenticatedSubject.asObservable();

    // Check token expiration every 15 minutes
    timer(0, 15 * 60 * 1000).subscribe(() => this.checkTokenExpiration());
  }

  login(username: string, password: string): boolean {
    // For simplicity, use hardcoded credentials. Replace this with real authentication logic.
    if (username === 'user' && password === 'password') {
      const user = {
        id: 123,
        name: 'User',
        roles: [
          {
            name: 'admin',
            profile: [
              { nav: 'dashboard' },
              { nav: 'home' }
            ]
          },
          {
            name: 'engineer',
            profile: [
              { nav: 'second-home' },
              { nav: 'profile' }
            ]
          }
        ]
      };

      localStorage.setItem(this.TOKEN_KEY, 'true');
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this.isAuthenticatedSubject.next(true);
      this.setTokenExpiration(); // Set initial token expiration
      return true;
    }
    return false;
  }

  getUserRoles(): any[] {
    const user = JSON.parse(localStorage.getItem(this.USER_KEY) || '{}');
    return user.roles || [];
  }


  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  private setTokenExpiration(): void {
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 15); // Set expiration time to 15 minutes from now
    localStorage.setItem('tokenExpiration', expirationTime.getTime().toString());
  }

  private checkTokenExpiration(): void {
    const expirationTime = localStorage.getItem('tokenExpiration');
    if (expirationTime && new Date().getTime() > +expirationTime) {
      this.logout();
    }
  }
}
