import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddTaskDialogComponent} from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  addTaskOpen()
  {
    console.log("addTaskOpen()");
    const dialogRef = this.dialog.open(AddTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
  }

}
