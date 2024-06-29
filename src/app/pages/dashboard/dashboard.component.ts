import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private _toastService: ToastService) {}

  logout(): void {
    this.authService.logout();
    setTimeout(() => {
      this._toastService.success('Log out successfully');
    }, 500);
    this.router.navigate(['/sign-in']);
  }

  ngOnInit() { }
}
