import { Component } from '@angular/core';
import { TodoService } from './../service/todo.service';
import { TodoListVM } from '../interface/todo.list.vm';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  pendingTodo: TodoListVM[] = [];
  completedTodo: TodoListVM[] = [];
  constructor(private todoService: TodoService) {
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
  }
}
