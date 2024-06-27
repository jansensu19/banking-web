import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from '../component/toggleTheme/themeToggle.component';
import { MatIconModule } from '@angular/material/icon';
import { SchemeToggleComponent } from '../component/schemeToggle/schemeToggle.component';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    ThemeToggleComponent,
    SchemeToggleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    ThemeToggleComponent,
    SchemeToggleComponent
    // Other exports
  ]
})
export class SharedModule { }
