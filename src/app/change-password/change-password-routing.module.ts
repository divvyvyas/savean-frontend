import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordLayoutComponent } from './change-password-layout/change-password-layout.component';
import { ChangePasswordHomeComponent } from './components/change-password-home/change-password-home.component';


const routes: Routes = [
  {
    path: '',
    component: ChangePasswordLayoutComponent,
    children: [
      {
        path: '',
        component: ChangePasswordHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangePasswordRoutingModule { }
