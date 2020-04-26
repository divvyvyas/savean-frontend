import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeHomeComponent } from './components/home-home/home-home.component';
import { ReportCardComponent } from './pages/report-card/report-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeLayoutComponent, HomeHomeComponent, ReportCardComponent],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
