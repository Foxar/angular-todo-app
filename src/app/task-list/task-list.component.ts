import { Component, Input, OnInit } from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() selectedDate!: Date;
  taskArray: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnChanges(): void{
    console.log("Calling taskservice");
    this.taskService.getTasks(this.selectedDate).subscribe((tasks)=>{
      this.taskArray = tasks;
    })
  }
  ngOnInit(): void {
    
    
  }

}
