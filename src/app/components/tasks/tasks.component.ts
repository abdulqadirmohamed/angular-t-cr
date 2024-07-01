import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { TTask } from '../../types/Task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: TTask[] = TASKS;

}
