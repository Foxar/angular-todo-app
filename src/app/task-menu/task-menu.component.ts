import { Component, Input, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../task';

@Component({
  selector: 'task-menu',
  templateUrl: './task-menu.component.html',
  styleUrls: ['./task-menu.component.scss']
})
export class TaskMenuComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  @Input() task!: Task;
  ngOnInit(): void {
  }

  onDelete(){
    this.taskService.deleteTask(this.task).subscribe((task)=>{
      console.log("Deleted" + task);
    });
  }

}
