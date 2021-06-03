import { Component, OnInit, OnChanges } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddTaskDialogComponent} from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnChanges {

  constructor(private dialog: MatDialog) 
  { 
    this.selectedDate = new Date();
  }
  
  selectedDate: Date;

  ngOnChanges(): void{
    console.log('changes todo');
  }
  addTaskOpen()
  {
    console.log("addTaskOpen()");
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '30%',
      maxWidth: 'none'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {

  }

}
