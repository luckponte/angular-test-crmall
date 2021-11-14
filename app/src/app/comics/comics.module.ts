import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ListComponent,
    DetailComponent,
  ]
})
export class ComicsModule { }
