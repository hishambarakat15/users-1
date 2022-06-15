import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentValidateComponent } from './payment-validate.component';

describe('PaymentValidateComponent', () => {
  let component: PaymentValidateComponent;
  let fixture: ComponentFixture<PaymentValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
