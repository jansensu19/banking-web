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
    redirectTo: 'sign-in',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      // Add other authenticated routes here
    ]
  },
  { path: 'sign-in', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule), canActivate: [NoAuthGuard] },
  { path: 'sign-out', loadChildren: () => import('./pages/auth/sign-out/sign-out.module').then(m => m.SignOutModule), canActivate: [NoAuthGuard] },
  {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('./pages/error/error-404/error-404.module').then(m => m.Error404Module)},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
