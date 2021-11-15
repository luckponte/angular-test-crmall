import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartOverlayComponent } from "./cart-overlay.component";

@NgModule({
  declarations: [CartOverlayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CartOverlayComponent
  ]
})
export class CartOverlayModule { }
