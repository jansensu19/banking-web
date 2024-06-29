import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { AngularToastifyModule } from 'angular-toastify';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularToastifyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
