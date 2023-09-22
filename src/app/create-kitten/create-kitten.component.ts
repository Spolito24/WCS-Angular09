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
  kitten: Kitten = new Kitten('', new Date(), '');

  constructor() {}

  onSubmit(): void {
    alert(this.kitten);
  }

  ngOnInit(): void {}
}
