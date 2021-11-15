import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CartOverlayModule } from "./../cart-overlay/cart-overlay.module";

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { ComicDataService } from "./comic-data.service";

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CartOverlayModule,
  ],
  exports: [
    ListComponent,
    DetailComponent,
  ],
  providers: [
    ComicDataService,
  ]
})
export class ComicsModule { }
