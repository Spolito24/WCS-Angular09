import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kitten } from '../model/Kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  @Input()
  kittenList: Kitten[] = [];

  @Output()
  sendKittenUserList: EventEmitter<Kitten> = new EventEmitter();

  isHidden: boolean = true;

  adoptKitten(kitten: Kitten): void {
    this.sendKittenUserList.emit(kitten);
  }

  constructor() {}

  showKittenList(): void {
    console.log(this.kittenList);
  }

  ngOnInit() {}
}
