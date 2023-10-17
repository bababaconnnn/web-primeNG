import { Component } from '@angular/core';

@Component({
  selector: 'app-input-with-regex',
  templateUrl: './input-with-regex.component.html',
  styleUrls: ['./input-with-regex.component.scss']
})
export class InputWithRegexComponent {
  blockSpace: RegExp = /[^s]/; 
  blockChars: RegExp = /^[^<>*!]+$/;
}
