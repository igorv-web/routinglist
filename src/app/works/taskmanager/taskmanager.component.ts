import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  arr: Array<Itask> = [];
  value: string;
  save: string;
  taskIndex: number;
  isHide: string = 'hide';
  isRed: boolean;
  redColor: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.value) {
      let TASK = new Tasks(this.value);
      this.arr.push(TASK);
      this.value = '';
      this.isRed = false;
    } else {
      alert("Please, write something");
      this.isRed = true;
    }
  }

  deleteTask(index: number): void {
    this.arr.splice(index, 1);
  }

  editTask(index: number): void {
    this.save = this.arr[index].name
    this.taskIndex = index
    this.isHide = 'show';
  }

  saveTask(): void {
    this.arr[this.taskIndex].name = this.save;
    this.save = '';
    this.isHide = 'hide';
  }

  active(index: number): void {
    this.arr[index].status = !this.arr[index].status
  }
}

interface Itask {
  name: string,
  status: boolean,
  progress: string
}

class Tasks implements Itask {
  constructor(
    public name: string,
    public status: boolean = false,
    public progress: string = "In progress..."
  ) { }
}