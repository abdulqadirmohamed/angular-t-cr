import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TProduct } from '../../types/Task';
// import { products } from '../../mock-tasks';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() product?: any

  // @Input() childMessage?: string;

  // @Output() messageEvent = new EventEmitter<string>();
  
  // sendMessageToParent(){
  //   this.messageEvent.emit("Hello from child");
  // }
}
