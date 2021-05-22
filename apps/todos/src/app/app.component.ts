import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Todo {
  title: string;
}

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = []

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((todos) => (this.todos = todos))
  }

  addTodo() {
    this.http.post('/api/todos', {}).subscribe(() => {
      this.fetch()
    })
  }
}
