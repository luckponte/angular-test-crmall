import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "./../app-routing.module";

import { CartOverlayComponent } from "./cart-overlay.component";

@NgModule({
  declarations: [CartOverlayComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    CartOverlayComponent
  ]
})
export class CartOverlayModule { }
