import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './comics/detail/detail.component';
import { ListComponent } from './comics/list/list.component';


const routes: Routes = [
  {
    path: '', 
    component: ListComponent,
  },
  {
    path: 'comic',
    component: DetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
