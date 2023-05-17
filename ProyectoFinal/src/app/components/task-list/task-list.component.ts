import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from '../models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{

  task1: ITask = {
    title: 'Task 1',
    description: 'descripcion ejemplo 1',
    completed: false,
    level: Levels.Info
  };

  task2: ITask = {
    title: 'Task 2',
    description: 'descripcion ejemplo 2',
    completed: true,
    level: Levels.Urgent
  };



  constructor() {

  }

  ngOnInit() {

  }


  deleteTask(tarea: ITask){
    alert(`Se procede a aeliminar la tarea: ${tarea.title}`);
  }

}
