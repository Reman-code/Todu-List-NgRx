import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
  
  ) { }
  getTodoList() {
    //  Logic to our http service
    return [
      { id:1, description: 'A short description of awesome novel 1', isActive: true},
      { id:1, description: 'A short description of awesome novel 1', isActive: true},
      { id:1, description: 'A short description of awesome novel 1', isActive: false},
    ];
  }
}
