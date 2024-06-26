import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmptyLayoutComponent } from './empty.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        EmptyLayoutComponent
    ],
    imports     : [
        RouterModule,
        MatSlideToggleModule,
        FormsModule,
        MatIconModule,
        SharedModule
    ],
    exports     : [
        EmptyLayoutComponent
    ]
})
export class EmptyLayoutModule
{
}
