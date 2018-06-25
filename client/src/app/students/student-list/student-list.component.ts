import { Component, OnInit, ViewChild } from '@angular/core';

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

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
    .subscribe(students => {
      this.students = new MatTableDataSource(students)
      this.students.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.students.filter = filterValue;
  }

}
