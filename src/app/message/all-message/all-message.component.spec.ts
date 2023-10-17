import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMessageComponent } from './all-message.component';

describe('AllMessageComponent', () => {
  let component: AllMessageComponent;
  let fixture: ComponentFixture<AllMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMessageComponent]
    });
    fixture = TestBed.createComponent(AllMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
