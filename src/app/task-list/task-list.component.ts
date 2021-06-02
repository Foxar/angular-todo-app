import { Component, OnInit } from '@angular/core';
import {TestTasks} from '../test-tasks';
import {Task} from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskArray: Task[] = TestTasks;

  constructor() { }

  ngOnInit(): void {
  }

}
