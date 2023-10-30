import { Component, OnInit } from '@angular/core';
import { TodoService } from './../service/todo.service';
import { TodoListVM } from '../interface/todo.list.vm';
import * as TodoAction from './../store/todo.action';
import { TodoListState } from '../store/todo.list.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  pendingTodo: TodoListVM[] = [];
  completedTodo: TodoListVM[] = [];
  constructor(private todoService: TodoService,
    private store: Store<{todList:{todList:TodoListState}}>) {
  }

  ngOnInit() {
    this.todoService.getTodoList().map(data => {
      if(data.isActive === true) {
        this.pendingTodo.push(data);
      }
      else {
        this.completedTodo.push(data);
      }
    })

      this.store.dispatch(TodoAction.addTodo({payload: this.pendingTodo}))
    
  }
}
