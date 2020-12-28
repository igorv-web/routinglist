import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  arr: string[] = [];
  badwords: string;
  words: string;
  area: string;
  text: string;
  isRed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addWord(): void {
    if (this.words) {
      this.arr.push(this.words);
      this.isRed = false;
      this.words = '';
    } else {
      alert('Write word');
      this.isRed = true;
    }
  }

  resetForm(): void {
    this.words = '';
    this.text = '';
    this.arr = [];
  }

  cenzor(): void {
    let arr = this.text.split(/\b/);
      let censored = arr.map(word => this.arr.includes(word) ? '*'.repeat(word.length) : word);
      this.text = censored.join('');
  }
}