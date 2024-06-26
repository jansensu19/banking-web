import { NgModule } from '@angular/core';
// import { SharedModule } from 'app/shared/shared.module';
import { LayoutComponent } from './layout.component';
import { EmptyLayoutModule } from './empty/empty.module';
import { BasicLayoutModule } from './basic/basic.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const layoutModules = [
  // Empty
  EmptyLayoutModule,
  BasicLayoutModule,
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent,
        RouterModule,
        ...layoutModules
    ],
    imports: [
      CommonModule,
        // SharedModule,
        ...layoutModules,
    ]
})
export class LayoutModule
{
}
