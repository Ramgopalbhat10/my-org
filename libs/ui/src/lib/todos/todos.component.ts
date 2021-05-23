import { Component, Input } from '@angular/core';
import { Todo } from '@my-org/data'

@Component({
  selector: 'my-org-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @Input() todos!: Todo[];

}
