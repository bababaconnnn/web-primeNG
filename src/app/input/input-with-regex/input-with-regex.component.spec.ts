import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithRegexComponent } from './input-with-regex.component';

describe('InputWithRegexComponent', () => {
  let component: InputWithRegexComponent;
  let fixture: ComponentFixture<InputWithRegexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputWithRegexComponent]
    });
    fixture = TestBed.createComponent(InputWithRegexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
