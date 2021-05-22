import { Injectable } from '@nestjs/common';

import { Todo } from '@my-org/data'

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Learn Angular' }, { title: 'Learn Nx' }]

  getTodos(): Todo[] {
    return this.todos
  }

  addTodo() {
    this.todos.push({
      title: `New title ${Math.floor(Math.random() * 1000)}`
    })
  }
}
