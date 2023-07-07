import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from '../interfaces/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    { title: 'tarea 1', description: 'descripcion de la tarea 1', status: 'new' },
    { title: 'tarea 2', description: 'descripcion de la tarea 2', status: 'new' },
    { title: 'tarea 3', description: 'descripcion de la tarea 3', status: 'in progress' },
    { title: 'tarea 4', description: 'descripcion de la tarea 4', status: 'in progress' },
    { title: 'tarea 5', description: 'descripcion de la tarea 5', status: 'done' }
  ];

  constructor(private httpClient: HttpClient) { }

  list(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.todos);
        // reject({ message: 'Something failed'});
      }, 2000);
    });
  }

  get(): Observable<Todo[]> {
    const url = 'https://simple-todos.onrender.com/api/tareas';
    return this.httpClient.get<Todo[]>(url);
  }
}

