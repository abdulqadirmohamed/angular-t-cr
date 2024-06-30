import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { TTask } from '../../types/Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks:TTask[] = TASKS;
}
