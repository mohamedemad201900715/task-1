import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
private URL='../../../../../assets/subject.json'
  constructor(private http:HttpClient) { }
  getAllSubjects():Observable<any>{
   return this.http.get(this.URL);
  }
}
