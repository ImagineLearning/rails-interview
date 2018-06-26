import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    StudentListComponent
  ],
  declarations: [
    StudentListComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
