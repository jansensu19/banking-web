// auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public authStatus: Observable<boolean>;
  private readonly TOKEN_KEY = 'auth_token';

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
      localStorage.setItem(this.TOKEN_KEY, 'true');
      this.isAuthenticatedSubject.next(true);
      this.setTokenExpiration(); // Set initial token expiration
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
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
      localStorage.removeItem(this.TOKEN_KEY);
      this.isAuthenticatedSubject.next(false);
      localStorage.removeItem('tokenExpiration');
    }
  }
}
