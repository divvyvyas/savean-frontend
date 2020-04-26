import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeHomeComponent } from './components/home-home/home-home.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
