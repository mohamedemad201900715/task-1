import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    SubjectsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
