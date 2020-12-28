import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-phonemanager',
  templateUrl: './phonemanager.component.html',
  styleUrls: ['./phonemanager.component.css']
})
export class PhonemanagerComponent implements OnInit {
  sortingColumn: string;
  isDesc: boolean;
  arr: Array<INumber> = [];
  saveFirst: string;
  saveLast: string = '';
  saveNum: string;
  numberIndex: number;
  firstName: string;
  lastName: string;
  number: string;
  filterBy: string;
  order: string = 'info.name';
  reverse: boolean = false;
  sortedCollection: any[];
  collection: any[];
  modalRef: BsModalRef;
  isHide: boolean = true;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  addNumber() {
    if (this.firstName && this.lastName && this.number) {
      let NUMBER = new Phone(this.firstName, this.lastName, this.number);
      this.arr.push(NUMBER);
      this.firstName = '';
      this.lastName = '';
      this.number = '';
      this.filterBy = '';
    } else {
      alert("Please, write something");
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  editNumber(index: number): void {
    this.saveFirst = this.arr[index].first;
    this.saveLast = this.arr[index].last;
    this.saveNum = this.arr[index].number;
    this.numberIndex = index;
    this.isHide = false;
  }

  saveNumber(): void {
    this.arr[this.numberIndex].first = this.saveFirst;
    this.arr[this.numberIndex].last = this.saveLast;
    this.arr[this.numberIndex].number = this.saveNum;
    this.saveFirst = '';
    this.saveLast = '';
    this.saveNum = '';
    this.isHide = true;
  }

  deleteNumber(index: number): void {
    this.arr.splice(index, 1);
  }

  sortBy(colName): void {
    this.sortingColumn = colName;
    this.isDesc = !this.isDesc;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}

export interface INumber {
  first: string,
  last: string,
  number: string
}

export class Phone implements INumber {
  constructor(
    public first: string,
    public last: string,
    public number: string
  ) { }
}