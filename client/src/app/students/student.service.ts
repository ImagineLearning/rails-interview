import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'http://localhost:3000/students';


  constructor(private http: HttpClient, private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

    return this.http.get<Student[]>(this.studentsUrl, httpOptions)
    .pipe(
      tap(students => this.messageService.add('StudentService: fetched students')),
      catchError(this.handleError('getStudents', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.add(`StudentService: There was a problem processing ${operation}: ${error.message}`);
      return of(result as T);
    };
  }
}
