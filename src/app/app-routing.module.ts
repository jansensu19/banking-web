// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Error404Component } from './pages/error/error-404/error-404.component';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';
import { AuthGuard } from './core/auth/guards/Authguard';
import { AuthService } from './core/service/auth.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in', // Redirect root URL to sign-in initially
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard], // Apply AuthGuard to the whole layout
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      // Add other authenticated routes here
    ]
  },
  { path: 'sign-in', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule), canActivate: [NoAuthGuard] },
  { path: 'sign-out', loadChildren: () => import('./pages/auth/sign-out/sign-out.module').then(m => m.SignOutModule), canActivate: [NoAuthGuard] },
  { path: '**', component: Error404Component } // Redirect all unmatched routes to Error404Component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService] // Provide AuthService at the root level
})
export class AppRoutingModule { }
