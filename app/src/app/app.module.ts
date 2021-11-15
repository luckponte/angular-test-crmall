import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComicsModule } from "./comics/comics.module";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { CheckoutService } from './checkout.service';
import { CartOverlayComponent } from './cart-overlay/cart-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartOverlayComponent
  ],
  imports: [
    ComicsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
