import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getAllTasks() {
    const path = `${this.api}/todos`;
    return this.http.get<ITask[]>(path);
  }

  getTask(id: string) {
    const path = `${this.api}/todos/${id}`;
    return this.http.get<ITask[]>(path);
  }

  createTask(task: ITask) {
    const path = `${this.api}/todos/`;
    return this.http.post<ITask[]>(path, task);
  }

  updateTask(task: ITask) {
    const path = `${this.api}/todos/${task.id}`;
    return this.http.put<ITask[]>(path, task);
  }

  deleteTask(id: string) {
    const path = `${this.api}/todos/${id}`;
    return this.http.delete(path);
  }
}
