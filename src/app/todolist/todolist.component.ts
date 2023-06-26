import { Component, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../task';
import { states } from '../states';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  public taskList: Task[] = [];
  public id: number = 0;
  constructor() {
    this.taskList = [
      { id: 0, state: states.active, text: 'tarea1' },
      { id: 1, state: states.active, text: 'tarea2' },
      { id: 2, state: states.complete, text: 'tarea3' },
      { id: 3, state: states.complete, text: 'tarea4' },
    ];
  }
  insertTask(input: HTMLInputElement): void {
    if (input.value != '') {
      this.taskList.push({
        id: this.id++,
        state: states.active,
        text: input.value,
      });
    }
  }

  onNewState(newState: { state: states; id: number }): void {
    this.taskList.filter((task) => task.id == newState.id)[0].state =
      newState.state;
    console.log(this.taskList);
  }

  deleteTask(id: number): void {
    this.taskList = this.taskList.filter((task) => task.id !== id);
  }
}
