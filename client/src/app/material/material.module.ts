import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule
  ]
})
export class MaterialModule { }
