import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SubjectsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class SubjectsModule { }
