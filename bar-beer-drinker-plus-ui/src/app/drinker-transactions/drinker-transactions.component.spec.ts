import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerTransactionsComponent } from './drinker-transactions.component';

describe('DrinkerTransactionsComponent', () => {
  let component: DrinkerTransactionsComponent;
  let fixture: ComponentFixture<DrinkerTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
