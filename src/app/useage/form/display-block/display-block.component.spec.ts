import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBlockComponent } from './display-block.component';

describe('DisplayBlockComponent', () => {
  let component: DisplayBlockComponent;
  let fixture: ComponentFixture<DisplayBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBlockComponent]
    });
    fixture = TestBed.createComponent(DisplayBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
