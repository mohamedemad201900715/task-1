import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { MiniNavbarComponent } from './components/mini-navbar/mini-navbar.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    MiniNavbarComponent,
    FormQuestionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    MiniNavbarComponent,
    FormQuestionComponent
  ]
})
export class SharedModule { }
