import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInputComponent } from './all-input.component';

describe('AllInputComponent', () => {
  let component: AllInputComponent;
  let fixture: ComponentFixture<AllInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllInputComponent]
    });
    fixture = TestBed.createComponent(AllInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
