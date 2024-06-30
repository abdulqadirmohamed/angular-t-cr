import { Component, Input } from '@angular/core';
import { TTask } from '../../types/Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: TTask[] = TASKS;
}
