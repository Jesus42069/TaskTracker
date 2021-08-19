import { Component, OnInit } from '@angular/core';
import { TaskHolderServiceService } from 'src/app/services/task-holder-service.service';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService, public taskHolderService: TaskHolderServiceService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.taskHolderService.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }

addTask (task: Task) {
  this.taskService.addTask(task).subscribe((task) => (this.taskHolderService.tasks.push(task)));
  }


}
