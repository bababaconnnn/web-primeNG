import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-input',
  templateUrl: './all-input.component.html',
  styleUrls: ['./all-input.component.scss']
})
export class AllInputComponent {
  value: string = 'Hello World!';
  value1: number = 42723;
  value2: number = 58151;
  value3: number = 2351.35;
  value4: number = 50;
  ingredient!: string;

  selectedCategory: any = null;

  categories: any[] = [
      { name: 'Accounting', key: 'A' },
      { name: 'Marketing', key: 'M' },
      { name: 'Production', key: 'P' },
      { name: 'Research', key: 'R' }
  ];


  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl(1234)
    });
  }
}
