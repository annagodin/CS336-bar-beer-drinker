import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderShiftsComponent } from './bartender-shifts.component';

describe('BartenderBarsComponent', () => {
  let component: BartenderShiftsComponent;
  let fixture: ComponentFixture<BartenderShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
