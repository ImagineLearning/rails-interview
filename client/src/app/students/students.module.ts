import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { StudentService } from './student.service';

@NgModule({
  imports: [
    CommonModule
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
