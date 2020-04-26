import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AlreadyLoggedinComponent } from './components/already-loggedin/already-loggedin.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';



@NgModule({
  declarations: [ProjectLayoutComponent, HeaderComponent, PageNotFoundComponent, AlreadyLoggedinComponent, BlankLayoutComponent],
  imports: [
    RouterModule,
    HttpClientModule,
    SharedModule
  ]
})
export class CoreModule { }
