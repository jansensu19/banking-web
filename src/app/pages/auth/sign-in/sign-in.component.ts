import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html'
})

export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() { }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
