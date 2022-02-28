import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() Task: Task;
  constructor(public taskService: TaskServiceService) {
    this.Task={
      title:'',descripcion:'', hide: true
    }
   }

  ngOnInit(): void {
  }

  deleteTask(task:Task){
    if(confirm("desea eliminar el registro")){
    this.taskService.deleteTask(task);
    }
  }
}
