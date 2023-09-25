import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  Validators,
  NgModel,
} from '@angular/forms';
import { Kitten } from '../model/Kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  kitten: Kitten = new Kitten('', new Date(), '', false);
  kittenList: Kitten[] = [];
  userKittenList: Kitten[] = [];

  receiveNewUserKitten(event: Kitten): void {
    this.userKittenList.push(event);
    console.log(this.userKittenList);
  }

  constructor() {}

  onSubmit(): void {
    console.log(this.kitten);
    this.kittenList.push(this.kitten);
  }

  ngOnInit(): void {}
}
