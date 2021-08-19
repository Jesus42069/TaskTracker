import { Component, OnInit } from '@angular/core';
import { TaskHolderServiceService } from 'src/app/services/task-holder-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  
  search: Text;


  constructor(public taskHolderService: TaskHolderServiceService,) { }

  

  ngOnInit(): void {
   
  }
  searchTasks() {
    this.taskHolderService.filterTask(this.search)
   }
   onSearchChange(searchValue: string): void {  
    this.taskHolderService.filterTask(this.search)
  }
   
}
