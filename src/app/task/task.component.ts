import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() taskContent!: Task;

  constructor(private taskService: TaskService) {}

  changeCheck(checked: boolean): void{
    console.log(checked);
    this.taskContent.checked=checked;
    this.taskService.updateTask(this.taskContent).subscribe();
  }

}
