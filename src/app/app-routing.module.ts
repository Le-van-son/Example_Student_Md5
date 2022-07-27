import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToursComponent} from "./components/list-tours/tours.component";
import {CreateComponent} from "./components/create/create.component";
import {DetailComponent} from "./components/detail/detail.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: ToursComponent
  },
  {
    path: 'create-tours',
    component: CreateComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
