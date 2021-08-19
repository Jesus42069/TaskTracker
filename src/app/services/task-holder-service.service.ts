import { Injectable } from '@angular/core';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskHolderServiceService {
  searchTerm: string = ''
  tasks: Task[] = [];

  constructor() { }

  get filteredTasks(): Task[] {
    return this.tasks.filter((t) => { return t.text.toUpperCase().includes(this.searchTerm.toUpperCase()) })
  }

  filterTask(searchTerm, ) {
    this.searchTerm = searchTerm
  }

  
}
