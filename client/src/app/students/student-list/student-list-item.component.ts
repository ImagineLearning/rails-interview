import { Component, Input } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent {
  @Input() student: Student;

  constructor() { }

}
