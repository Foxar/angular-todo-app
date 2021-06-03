import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {TestTasks} from '../test-tasks';
import {Task} from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]>{
    const tasks = of(TestTasks);
    return tasks;
  }
}
