import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

import { DragulaService } from 'ng2-dragula'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    new Todo('1', 'mow the lawn', 'todo'),
    new Todo('2', 'wash dishes', 'todo'),
    new Todo('3', 'return book', 'in-progress'),
    new Todo('4', 'get dry cleaning', 'done'),
    new Todo('5', 'call Mom', 'done')
  ]

  constructor( dragulaService: DragulaService ) {
    dragulaService.drop.subscribe((value) => {
      this.updateState(value[1].id, value[2].id)
    })
  }

  ngOnInit() {
  }

  getTodosInTodo(): Todo[] {
    return this.todos.filter(todo => todo.state === 'todo')
  }

  getTodosInProgress(): Todo[] {
    return this.todos.filter(todo => todo.state === 'in-progress')
  }

  getTodosInDone(): Todo[] {
    return this.todos.filter(todo => todo.state === 'done')
  }

  updateState(todoId: string, newState: string) {
    this.todos.find(todo => todo.id == todoId)
      .state = newState

      // could use web service to persist the state
      console.log('updating web service with new state: todoService.save(this.todos)')
  }

}
