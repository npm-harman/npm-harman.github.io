import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PicsContainerComponent } from './pics-container/pics-container.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PicsContainerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule
  ]
})
export class LayoutModule { }
