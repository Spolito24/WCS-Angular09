import { Component, Input } from '@angular/core';
import { Kitten } from '../model/Kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent {
  @Input()
  userKittenList: Kitten[] = [];

  constructor() {}
}
