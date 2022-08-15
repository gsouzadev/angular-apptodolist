import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-to-do-list',
  templateUrl: './input-to-do-list.component.html',
  styleUrls: ['./input-to-do-list.component.scss']
})
export class InputToDoListComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
