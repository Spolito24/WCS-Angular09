import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../model/Kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  @Input()
  name: string = '';

  @Input()
  dateOfBirth: Date = new Date();

  @Input()
  image: string = '';

  @Input()
  kittenList: Kitten[] = [];

  constructor() {}

  ngOnInit() {}
}
