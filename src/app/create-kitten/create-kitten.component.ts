import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  kittenForm = this.fb.group({
    name: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.kittenForm.value.name !== '') {
      alert('new cat named ' + this.kittenForm.value.name + ' added');
    }
  }

  ngOnInit(): void {}
}
