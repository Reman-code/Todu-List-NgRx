import { createAction, props } from '@ngrx/store';
import { TodoListVM } from '../interface/todo.list.vm';

export const addTodo = createAction(
  '[Todo List] AddTodo',
  props<{ payload: TodoListVM[] }>()
);