import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChartComponent } from './all-chart.component';

describe('AllChartComponent', () => {
  let component: AllChartComponent;
  let fixture: ComponentFixture<AllChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllChartComponent]
    });
    fixture = TestBed.createComponent(AllChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
