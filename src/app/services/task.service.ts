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

  constructor(private httpClient:HttpClient) { }

  getTasks(selectedDate: Date): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.tasksEndpoint.concat("?dateAdded=" + selectedDate.toDateString()));
  }
}
