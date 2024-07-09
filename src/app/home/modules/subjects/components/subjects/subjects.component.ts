import { card } from './../../../../../context/DTOs';
import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
cards!:card[];
constructor(private subjectService:SubjectsService){}
  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe(
      (response)=>{
        this.cards = response;
        console.log(response);

      },
      (Error)=>{
        console.log(Error);

      }
    )
  }

}
