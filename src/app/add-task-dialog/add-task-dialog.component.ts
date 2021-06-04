import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import {Task} from '../task';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {date: Date}, private taskService: TaskService) { }
    date: Date = this.data.date;

    submitted = false;

    model = new Task(
      "",
      {day:0,month:0,year:0},
      false
    );

    ngOnInit(){
      this.model.dateAdded = {
        day: this.date.getDate(),
        month: this.date.getMonth(),
        year: this.date.getFullYear()
      }
    }
    onSubmit(){
      this.submitted = true;
      console.log("submitting new one");
      this.taskService.submitTask(this.model).subscribe((task)=>{
        console.log("Returned" + task);
      })
      
    }
}
