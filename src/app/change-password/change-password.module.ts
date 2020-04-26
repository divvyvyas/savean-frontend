import { NgModule } from '@angular/core';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordLayoutComponent } from './change-password-layout/change-password-layout.component';
import { ChangePasswordHomeComponent } from './components/change-password-home/change-password-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ChangePasswordLayoutComponent, ChangePasswordHomeComponent],
  imports: [
    ChangePasswordRoutingModule,
    SharedModule
  ]
})
export class ChangePasswordModule { }
