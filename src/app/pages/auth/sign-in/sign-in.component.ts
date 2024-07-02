import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html'
})

export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private _toastService: ToastService) {}

  ngOnInit() { }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      setTimeout(() => {
        this._toastService.success('Login successfully');
      }, 500);
      this.router.navigate(['/dashboard']);
    } else {
      this._toastService.error('Invalid credentials');
    }
  }
}
