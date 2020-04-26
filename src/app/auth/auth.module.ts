import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, RegisterComponent],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
