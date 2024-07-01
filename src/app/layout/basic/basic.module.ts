import { NgModule } from '@angular/core';
import { BasicLayoutComponent } from './basic.component';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { SideBarComponent } from '../../component/navigation/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        BasicLayoutComponent,
        SideBarComponent
    ],
    imports: [
      CommonModule,
        RouterModule,
        MatSlideToggleModule,
        FormsModule,
        MatIconModule,
        SharedModule
    ],
    exports: [
        BasicLayoutComponent
    ]
})
export class BasicLayoutModule { }
