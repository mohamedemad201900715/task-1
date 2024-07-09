import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {
  questionType: string[] = [];
  todo: string[] = ['اختيار من متعدد', 'اختيار فردى', 'نص'];
  done: string[] = [];
  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id === "cdk-drop-list-2")
        return;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    if (event.container.data.length > 0) {
      this.questionType = event.container.data

    }
    if (event.container.data.length == 0) {
      this.questionType = [];
    }
  }
  removeQuestion(index: number) {
    this.todo.push(this.questionType[index])
    this.questionType.splice(index, 1);
  }
}
