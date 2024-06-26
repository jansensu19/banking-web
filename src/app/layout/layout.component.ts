// layout.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  layout: 'empty' | 'basic' = 'empty'; // Default to 'empty'
  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.authService.authStatus.subscribe(isAuthenticated => {
      this.layout = isAuthenticated ? 'basic' : 'empty';
    });
  }
}
