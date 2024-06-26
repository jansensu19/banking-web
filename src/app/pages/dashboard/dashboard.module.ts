import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
      // Add other child routes if necessary
    ])
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule { }
