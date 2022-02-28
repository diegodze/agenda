import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks: Task[];
  constructor() {
    this.tasks=[];
   }

   getTask(){//para obtener tareas de localstorage
     if(localStorage.getItem('tareas')===null){
       return this.tasks;
     }else{
       this.tasks = JSON.parse(localStorage.getItem('tareas')!);
       return this.tasks;
     }
   }

   addTask(task : Task){
     this.tasks.push(task);
     let tasks: Task[] = [];
     if(localStorage.getItem('tareas')===null){
       tasks.push(task);
       localStorage.setItem('tareas', JSON.stringify(tasks));
     }else{
      tasks = JSON.parse(localStorage.getItem('tareas')!);
      tasks.push(task);
      localStorage.setItem('tareas', JSON.stringify(tasks));
     }
   }

   deleteTask(task: Task){
     for (let i = 0; i < this.tasks.length; i++) {
       if(task == this.tasks[i]){
         this.tasks.splice(i,1);
         localStorage.setItem('tareas',JSON.stringify(this.tasks))
       }

     }
   }
}
