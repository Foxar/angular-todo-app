import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() taskContent!: Task;
  checked: boolean;

  constructor() {
    this.checked=false;
   }

  ngOnInit(): void {
  }

  changeCheck(checked: boolean): void{
    console.log(checked);
    this.checked=checked;
  }

}
