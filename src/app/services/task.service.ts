import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksEndpoint = 'http://localhost:3000/tasks';

  constructor(private httpClient:HttpClient) { }

  getTasks(selectedDate: Date): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.tasksEndpoint.concat("?dateAdded=" + selectedDate.toDateString()));
  }
}
