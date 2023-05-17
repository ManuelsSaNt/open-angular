import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  // quien carga la data
  @Input() task: ITask | undefined;

  @Output()
  delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(){}

  ngOnInit() {

  }

  deleteTask() {
    this.delete.emit(this.task);
  }

}
