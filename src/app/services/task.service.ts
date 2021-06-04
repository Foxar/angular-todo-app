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

  deleteTask(task: Task): Observable<Task>{
    console.log("Deleting task in service");
    console.log(task);
    console.log(this.tasksEndpoint.concat("/") + task.id);
    return this.httpClient.delete<Task>(this.tasksEndpoint.concat("/") + task.id, this.httpOptions);
  }

  updateTask(task: Task): Observable<Task>{
    console.log("UpdateTask()");
    console.log(task);
    return this.httpClient.put<Task>(this.tasksEndpoint.concat("/")+task.id,task, this.httpOptions)
  }
}
