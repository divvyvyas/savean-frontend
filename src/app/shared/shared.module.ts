import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialComponentModule } from '../material-component/material-component.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialComponentModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialComponentModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
