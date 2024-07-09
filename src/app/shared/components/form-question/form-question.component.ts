import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent {
@Input() title:string=''
@Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

}
