import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Observable<Student[]>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.getStudents();
  }

  getStudents(): Observable<Student[]> {
    return this.studentService.getStudents();
  }

}
