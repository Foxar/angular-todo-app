import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() taskContent!: Task;
  checked: boolean;

  constructor() {
    this.checked=false;
   }

  changeCheck(checked: boolean): void{
    console.log(checked);
    this.checked=checked;
  }

}
