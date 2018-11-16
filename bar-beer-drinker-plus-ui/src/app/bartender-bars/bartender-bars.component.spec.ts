import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderBarsComponent } from './bartender-bars.component';

describe('BartenderBarsComponent', () => {
  let component: BartenderBarsComponent;
  let fixture: ComponentFixture<BartenderBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
