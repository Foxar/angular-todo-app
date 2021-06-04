import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../task';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksEndpoint = environment.apiUrl.concat('/tasks');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };  

  constructor(private httpClient:HttpClient) { }

  getTasks(selectedDate: Date): Observable<Task[]>{
    return this.httpClient.get<Task[]>(
      this.tasksEndpoint.concat(
        "?dateAdded.day=" + selectedDate.getDate() + 
        "&dateAdded.month=" + selectedDate.getMonth() +
        "&dateAdded.year=" + selectedDate.getFullYear()));
  }

  submitTask(task: Task): Observable<Task>{
    return this.httpClient.post<Task>(this.tasksEndpoint,task, this.httpOptions);
  }
}
