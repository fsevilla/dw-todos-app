import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/shared/interfaces/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  isLoading: boolean = false; 
  empty: boolean = false;
  error: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // this.todoService.list()
    //   .then(response => {
    //     this.todos = response;
    //     this.isLoading = false;
    //     this.error = false;
    //     if(this.todos.length === 0) {
    //       this.empty = true;
    //     }
    //   })
    //   .catch(err => {
    //     this.error = true;
    //     this.isLoading = false;
    //   });
    this.getTodos();
  }

  getTodos() {
    this.isLoading = true;
    this.todoService.get().subscribe({
      next: (response: Todo[]) => {
        this.todos = response;
        this.error = false;
        this.isLoading = false;
        if(this.todos.length===0) {
          this.empty = true;
        } else {
          this.empty = false;
        }
      },
      error: (err: Error) => {
        this.error = true;
        this.isLoading = false;
      }
    });
  }


}



