import { Component, OnInit, ViewChild } from '@angular/core';

import { MessageService } from '../../message.service';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: MatTableDataSource<Student>;
  displayedColumns = ['displayName', 'favoriteMovie'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService: StudentService, private messageService: MessageService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
    .then(students => {
      this.students = new MatTableDataSource(students)
      this.students.sort = this.sort;
      this.messageService.add('StudentListComponent: fetched students');
    }, err => {
      this.messageService.add(`StudentListComponent: There was a problem processing getStudents: ${err.message}`);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.students.filter = filterValue;
  }
}
