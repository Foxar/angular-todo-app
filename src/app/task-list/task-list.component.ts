import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskArray: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.taskArray = tasks;
    })
    
  }

}
