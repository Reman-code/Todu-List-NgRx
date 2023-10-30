import { Action, createReducer, on } from '@ngrx/store';
import * as TodoAction from './todo.action';
import { TodoListVM } from '../interface/todo.list.vm';

export interface TodoState {
    todoListVM: TodoListVM[];
}

export const initialState: TodoState = {
    todoListVM: [],
};

 const reducer = createReducer(
    initialState,
    on(TodoAction.addTodo, (state,{payload}) => {
        return {
            ...state,
            todoListVM: [...state.todoListVM, ...payload],
        };
    }),
 );

 export function TodoReducer (state:TodoState | undefined,action:Action ){
    return reducer(state,action);
 }
