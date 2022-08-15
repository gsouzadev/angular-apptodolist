import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, DoCheck {

  public taskList : Array<TaskList> = JSON.parse(localStorage.getItem("tasks") || "[]");

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    this.saveLocalStorage();
  }

  public setEmitTaskList(event: string) {
    console.log(event);
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const dialogDelete = window.confirm("Você deseja realmente apagar todas as tarefas?");
    if(dialogDelete) {
      this.taskList = [];
    }
  }

  public saveLocalStorage(): void {
    if(this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("tasks", JSON.stringify(this.taskList));
    }
  }

  public validationInput(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("A task que você está editando está vazia, deseja exclui-la?");
      if(confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

}
