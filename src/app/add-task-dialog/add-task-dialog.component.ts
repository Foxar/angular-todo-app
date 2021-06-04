import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import {Task} from '../task';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent {

    constructor() { 

    }
    @Input() date: Date = new Date();

    submitted = false;

    model = new Task("",{day:0,month:0,year:0},false);
    onSubmit(){
      this.submitted = true;
    }
}
