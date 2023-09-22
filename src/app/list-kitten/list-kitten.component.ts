import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  @Input()
  name: string = '';

  @Input()
  dateOfBirth: string = '';

  @Input()
  image: string = '';

  constructor() {}

  ngOnInit() {}
}
