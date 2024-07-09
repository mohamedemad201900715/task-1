import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Import DragDropModule


@NgModule({
  declarations: [
    ExercisesComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    SharedModule,
    DragDropModule
  ]
})
export class ExercisesModule { }
