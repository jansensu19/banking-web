import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from '../component/toggleTheme/themeToggle.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ThemeToggleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    ThemeToggleComponent,
    // Other exports
  ]
})
export class SharedModule { }
