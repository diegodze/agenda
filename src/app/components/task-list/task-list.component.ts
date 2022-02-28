import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task:Task[];
  constructor(public servicio:TaskServiceService) {
    this.task = this.servicio.getTask();
  }

  ngOnInit(): void {
  }

}
