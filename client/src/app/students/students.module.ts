import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list/student-list-item.component';
import { StudentService } from './student.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    StudentListComponent,
    StudentListItemComponent
  ],
  declarations: [
    StudentListComponent,
    StudentListItemComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
