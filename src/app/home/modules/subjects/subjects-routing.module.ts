import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        component: SubjectsComponent
      },
      {
        path: 'Exercise',
        loadChildren: () => import('./modules/exercises/exercises.module').then(m => m.ExercisesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
