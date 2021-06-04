import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { MatMenuModule } from '@angular/material/menu';
import { TaskMenuComponent } from './task-menu/task-menu.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateHeaderComponent } from './date-header/date-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    TaskListComponent,
    TaskComponent,
    TaskMenuComponent,
    AddTaskDialogComponent,
    DateHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
