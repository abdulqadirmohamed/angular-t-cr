import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TProduct } from '../../types/Task';
import { LucideAngularModule, Home } from 'lucide-angular';
// import { products } from '../../mock-tasks';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
  template: `<lucide-icon name="home" class="my-icon"></lucide-icon>`
})
export class TaskItemComponent {
  @Input() product?: any

}
