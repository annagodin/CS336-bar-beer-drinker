import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderSalesComponent } from './bartender-sales.component';

describe('BartenderSalesComponent', () => {
  let component: BartenderSalesComponent;
  let fixture: ComponentFixture<BartenderSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
